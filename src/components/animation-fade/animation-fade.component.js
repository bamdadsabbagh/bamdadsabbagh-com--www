import React from 'react'
import PropTypes from 'prop-types'
import { animated, useSpring } from 'react-spring'

const propTypes = {
    'children': PropTypes.node.isRequired,
    'delay': PropTypes.number,
    'isVisible': PropTypes.bool,
}

const defaultProps = {
    'delay': 0,
    'isVisible': true,
}

/**
 * @function
 * @name AnimationFadeComponent
 * @description fade in component using `react-spring`
 * @param {*} props - react component props
 * @param {React.ReactNode} props.children - react functional component to render
 * @param {number} [props.delay=0] - delay before triggering the animation
 * @param {boolean} [props.isVisible=true] - will fade out the component if set to `false`
 * @returns {React.ReactNode} - react component
 */
export default function AnimationFadeComponent ({
    children,
    delay = AnimationFadeComponent.defaultProps.delay,
    isVisible = AnimationFadeComponent.defaultProps.isVisible,
}) {

    const style = useSpring ({
        'from': {
            'opacity': isVisible ? 0 : 1,
        },
        'to': {
            'opacity': isVisible ? 1 : 0,
        },
        'delay': isVisible ? delay : 0,
    })

    return (
        <>
            <animated.div style={style}>
                {children}
            </animated.div>
        </>
    )

}

AnimationFadeComponent.propTypes = propTypes

AnimationFadeComponent.defaultProps = defaultProps