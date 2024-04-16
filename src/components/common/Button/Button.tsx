import { ButtonHTMLAttributes } from 'react'
import { ButtonVariant } from './Button.constants'
import style from './Button.module.css'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement>{
    variant?: ButtonVariant
}

export function Button({ variant = ButtonVariant.Default, children, ...rest }: IButton) {
    let buttonClass = style.buttonBase
    switch(variant){
    case ButtonVariant.Default:
        buttonClass += ` ${style.buttonDefault}`
        break
    case ButtonVariant.Outlined:
        buttonClass += ` ${style.buttonOutlined}`
        break
    case ButtonVariant.Text:
        buttonClass += ` ${style.buttonText}`
        break
    case ButtonVariant.Disabled:
            buttonClass += ` ${style.buttonDisabled}`
        break
    }

    return <button className={buttonClass}{...rest}>{children}</button>
}