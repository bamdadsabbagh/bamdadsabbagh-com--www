import React from 'react'
import PropTypes from 'prop-types'
import { animated, useSpring } from 'react-spring'
import useMeasure from 'react-use-measure'
import { useFirstRender } from '@/hooks/use-first-render'

/**
 * @function
 * @name AnimationSlideComponent
 * @description slide in component using `react-spring`
 * @param {JSX.Element} children - react functional component to render
 * @param {Number} delay - delay before triggering the animation
 * @param {Boolean} isVisible - will slide out the component if set to `false`
 * @return {JSX.Element}
 */
export default function AnimationSlideComponent ({
    children,
    delay = AnimationSlideComponent.defaultProps.delay,
    isVisible = AnimationSlideComponent.defaultProps.isVisible,
}) {

    const [ref, { height }] = useMeasure ()
    const [firstRender] = useFirstRender (delay)

    const style = useSpring ({
        'from': {
            'display': 'none',
            'opacity': isVisible ? 0 : 1,
            'height': 0,
        },
        'to': {
            'display': 'block',
            'opacity': isVisible ? 1 : 0,
            'height': isVisible ? height : 0,
        },
        'delay': () => {

            if (firstRender) return delay

            if (!isVisible) return 400

            return 0

        },
    })

    return (
        <>
            <animated.div style={style}>
                <div ref={ref}>
                    {children}
                </div>
            </animated.div>
        </>
    )

}

AnimationSlideComponent.defaultProps = {
    'delay': 0,
    'isVisible': true,
}

AnimationSlideComponent.propTypes = {
    'children': PropTypes.node.isRequired,
    'delay': PropTypes.number,
    'isVisible': PropTypes.bool,
}