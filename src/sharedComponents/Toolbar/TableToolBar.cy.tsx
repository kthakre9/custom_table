import React from 'react'
import { mount } from 'cypress/react'
import TableToolBar from './TableToolBar'


const ToolbarProps = {
    selectedRows: [
        {
            "name": "netsh.exe",
            "device": "Targaryen",
            "path": "\\Device\\HarddiskVolume2\\Windows\\System32\\netsh.exe",
            "status": "available"
        },
        {
            "name": "uxtheme.dll",
            "device": "Lannister",
            "path": "\\Device\\HarddiskVolume1\\Windows\\System32\\uxtheme.dll",
            "status": "available"
        }
    ],
    actions: ['Download']
}


describe('<TableToolBar />', () => {
    it('should render Toolbar', () => {
        cy.viewport(1280, 768)
        mount(<TableToolBar {...ToolbarProps} />)

        cy.get('.table_toolbar_wrapper').contains('2 Selected').should('exist')
        cy.get('.table_toolbar_button').should('have.text', 'Download')
    })

})