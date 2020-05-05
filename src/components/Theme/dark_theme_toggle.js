import React from 'react';
import {ThemeConsumer} from 'styled-components';

export default function ToggleDark(){
    return(
        <ThemeConsumer>
            {
                theme => (
                    <div className="dark-mode-toggle" onClick={e=>theme.setTheme(theme.mode === 'dark' ? { ...theme, mode: 'light' } : { ...theme,mode: 'dark' })}>
                        <i className={theme.mode === 'dark' ? "fa fa-sun-o fa-2x": "fa fa-moon-o fa-2x" } aria-hidden="true"></i>
                    </div>
                )
            }
        </ThemeConsumer>
    )
}