import React from 'react'
import { mount } from 'cypress/react'
import Table from './Table'

const TablePropsSelectable = {
  tableName: 'test_table_component',
  rows: [
    {
      "id": 0,
      "cells": {
        "name": "smss.exe",
        "device": "Stark",
        "path": "\\Device\\HarddiskVolume2\\Windows\\System32\\smss.exe",
        "status": "scheduled"
      },
      "config": {
        "isSelected": false,
        "isDisabled": true
      }
    },
    {
      "id": 1,
      "cells": {
        "name": "netsh.exe",
        "device": "Targaryen",
        "path": "\\Device\\HarddiskVolume2\\Windows\\System32\\netsh.exe",
        "status": "available"
      },
      "config": {
        "isSelected": false,
        "isDisabled": false
      }
    },
    {
      "id": 2,
      "cells": {
        "name": "uxtheme.dll",
        "device": "Lannister",
        "path": "\\Device\\HarddiskVolume1\\Windows\\System32\\uxtheme.dll",
        "status": "available"
      },
      "config": {
        "isSelected": false,
        "isDisabled": false
      }
    },
    {
      "id": 3,
      "cells": {
        "name": "cryptbase.dll",
        "device": "Martell",
        "path": "\\Device\\HarddiskVolume1\\Windows\\System32\\cryptbase.dll",
        "status": "scheduled"
      },
      "config": {
        "isSelected": false,
        "isDisabled": true
      }
    },
    {
      "id": 4,
      "cells": {
        "name": "7za.exe",
        "device": "Baratheon",
        "path": "\\Device\\HarddiskVolume1\\temp\\7za.exe",
        "status": "scheduled"
      },
      "config": {
        "isSelected": false,
        "isDisabled": true
      }
    }
  ],
  headers: ["Name", "Device", "Path", "Status"],
  isSelectableTable: true,
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
  selectableRows: [
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
  ]
}

const TablePropsNonSelectable = { ...TablePropsSelectable, isSelectableTable: false }

describe('<Table />', () => {
  beforeEach(() => {
    cy.viewport(1280, 768)
  })

  it('should render table', () => {
    mount(<Table {...TablePropsSelectable} />)
  })

  it('should display rows and columns as expected', () => {
    mount(<Table {...TablePropsSelectable} />)

    cy.get('table thead tr').should('have.length', 1)
    cy.get('table tbody tr').should('have.length', TablePropsSelectable.rows.length)
  });

  it('should display checkboxes if isSelectableTable is set to true', () => {
    mount(<Table {...TablePropsSelectable} />)

    cy.get('#all-rows').should('exist');
    cy.get('table tbody tr').each(($el) => {
      cy.wrap($el).within(() => {
        cy.get('td')
          .eq(0)
          .within(() => {
            cy.get('[type="checkbox"]').should('exist');
          });
      });
    });
  });

  it('should not display checkboxes if isSelectableTable is set to false', () => {
    mount(<Table {...TablePropsNonSelectable} />)

    cy.get('#all-rows').should('not.exist')
    cy.get('table tbody tr').each(($el) => {
      cy.wrap($el).within(() => {
        cy.get('td')
          .eq(0)
          .within(() => {
            cy.get('[type="checkbox"]').should('not.exist');
          });
      });
    });
  });

  it('should allow checbox selection for disabled rows', () => {
    mount(<Table {...TablePropsSelectable} />)

    cy.get('.table_body_row').not('.table_row__disabled').each(($el) => {
      cy.wrap($el).within(() => {
        cy.get('td')
          .eq(0)
          .within(() => {
            cy.get('[type="checkbox"]').should('not.be.disabled');
          })
      })
    })
  })

  it('should not allow checbox selection for disabled rows', () => {
    mount(<Table {...TablePropsSelectable} />)

    cy.get('.table_row__disabled .table_body_cell').first().within(() => {
      cy.get('[type="checkbox"]').should('be.disabled');
    });
  })

  it('should be able to select available row checkbox and verify the alert', () => {
    mount(<Table {...TablePropsSelectable} />)

    cy.get('#all-rows').should('exist').click();

  })
})