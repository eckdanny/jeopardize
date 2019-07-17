import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createSelector } from 'reselect'
import { AppState } from './reducers'
import * as wizardActions from './modules/wizard/wizardActions'
import styles from './Wizard.module.css'

type DefaultButtonProps = {
  onClick(): void
} & React.HTMLAttributes<HTMLButtonElement>

const DefaultButton: React.FC<DefaultButtonProps> = props => (
  <button {...props} />
)

type WizardProps = {
  steps: any[]
  onComplete?: () => void
  NextButton?: React.ComponentType<DefaultButtonProps>
  PreviousButton?: React.ComponentType<DefaultButtonProps>
  CompleteButton?: React.ComponentType<DefaultButtonProps>
}

const selectCurrentStep = createSelector(
  (state: AppState) => state.wizard,
  wizardState => wizardState.current
)

const Wizard: React.FC<WizardProps> = props => {
  const stepIndex = useSelector(selectCurrentStep)
  const dispatch = useDispatch()
  useEffect(() => {
    console.log(props.steps.length)
    dispatch(wizardActions.setSteps(props.steps.length))
  }, [props.steps])
  const handleNext = () => dispatch(wizardActions.next())
  const handlePrev = () => dispatch(wizardActions.previous())
  const NextButton = props.NextButton!
  const PreviousButton = props.PreviousButton!
  return (
    <div className={styles.Wizard}>
      {/* {stepIndex > 0 && <div className={styles.WizardProgress}>PROGRESS</div>} */}
      <div className={styles.WizardWrapper}>
        <div className={styles.WizardPreviousContainer}>
          {stepIndex > 0 && (
            <PreviousButton onClick={handlePrev}>Back</PreviousButton>
          )}
        </div>
        <div className={styles.WizardContent}>{props.steps[stepIndex]}</div>
        <div className={styles.WizardNextContainer}>
          {stepIndex + 1 !== props.steps.length && (
            <NextButton onClick={handleNext}>Next</NextButton>
          )}
        </div>
      </div>
      {/* <div className={styles.WizardFooter}>COMPLETE</div> */}
    </div>
  )
}

Wizard.defaultProps = {
  NextButton: DefaultButton,
  PreviousButton: DefaultButton,
}

export default Wizard
