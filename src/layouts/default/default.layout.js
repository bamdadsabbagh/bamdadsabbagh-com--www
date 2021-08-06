import React from 'react'
import PropTypes from 'prop-types'
import { BackgroundComponent } from '../../components/background/background.component'
import { FooterComponent } from '../../components/footer/footer.component'
import { ContactComponent } from '../../components/contact/contact.component'
import { MetaComponent } from '../../components/meta/meta.component'
import { Container, TopSection } from './default.layout.styles'

const propTypes = {
    'children': PropTypes.node.isRequired,
}

/**
 * @param {object} props react props
 * @param {React.ReactNode} props.children children
 * @returns {React.ReactElement} react component
 */
export function DefaultLayout ({ children }) {

    return (
        <>
            <MetaComponent/>
            <BackgroundComponent/>

            <Container>

                <TopSection>
                    {children}
                </TopSection>

                <ContactComponent/>

            </Container>

            <FooterComponent/>
        </>
    )

}

DefaultLayout.propTypes = propTypes