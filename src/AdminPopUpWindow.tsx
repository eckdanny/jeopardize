import React, { Component } from 'react'
import { createPortal } from 'react-dom'
import { copyStyles } from './copy-styles'

type AdminPopUpWindowProps = {
  onbeforeunload?: WindowEventHandlers['onbeforeunload']
  onunload?: WindowEventHandlers['onunload']
}

interface AdminPopUpWindowState {
  isOpen: boolean
}

class AdminPopUpWindow extends Component<
  AdminPopUpWindowProps,
  AdminPopUpWindowState
> {
  private isOpen: boolean
  private container: HTMLDivElement
  private window: Window | null
  private url = ''
  private name = 'MyAdminPopUpWindow'
  private strWindowFeatures =
    'modal=yes,dependent=yes,location=no,resizable=yes,scrollbars=yes,status=no,alwaysRaised=on'

  constructor(props: AdminPopUpWindowProps) {
    super(props)
    this.container = document.createElement('div')
    this.window = null
    this.isOpen = false
  }

  componentDidMount() {
    // Determine if alreay open?
    this.open()
  }

  componentWillUnmount() {
    this.window!.close()
  }

  open() {
    if (!this.window || !this.isOpen) {
      this.window = window.open(this.url, this.name, this.strWindowFeatures)
    }
    if (this.window) {
      if (this.props.onbeforeunload)
        this.window.onbeforeunload = this.props.onbeforeunload
      if (this.props.onunload) this.window.onunload = this.props.onunload

      // Set title
      this.window.document.title = 'Jeopardize Game Admin'
      // Set contents
      const $old = this.window.document.body
      const $new = $old.cloneNode(false)
      $new.appendChild(this.container)
      $old.parentNode!.replaceChild($new, $old)
      copyStyles(document, this.window.document)
      // Close on Parent Unload
      // this.window.opener.window.addEventListener('unload', () => {
      //   alert('closed!')
      // })
      // this.window.opener  addEventListener('unload', () => {
      //   this.window!.close()
      // })
    }
  }

  close() {}

  render() {
    return createPortal(this.props.children, this.container)
  }
}

export default AdminPopUpWindow
