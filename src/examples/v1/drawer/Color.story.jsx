import React, { useState } from 'react';

import { Drawer, Button, IconButton, Group } from 'core';

export default {
  title: 'V1/Examples/Drawers',
  decorators: [],
  parameters: {
    componentSubtitle: 'Drawer menu composition',
  },
};

const availableOptions = [
  {
    id: '0',
    icon:
      'https://www.ikea.com/fr/fr/images/products/alex-caisson-a-tiroirs-beige__0614633_PE686988_S5.JPG?f=g',
    label: 'Beige',
  },
  {
    id: '1',
    icon:
      'https://www.ikea.com/fr/fr/images/products/alex-caisson-a-tiroirs-blanc__0087723_PE217289_S5.JPG?f=g',
    label: 'Blanc',
  },
  {
    id: '2',
    icon:
      'https://www.ikea.com/fr/fr/images/products/alex-caisson-a-tiroirs-bleu__0614627_PE686982_S5.JPG?f=g',
    label: 'Bleu',
  },
  {
    id: '3',
    icon:
      'https://www.ikea.com/fr/fr/images/products/alex-caisson-a-tiroirs-brun-noir__0473040_PE614382_S5.JPG?f=g',
    label: 'Brun noir',
  },
];

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 13.414l4.95 4.95 1.414-1.414-4.95-4.95 4.95-4.95-1.414-1.414-4.95 4.95-4.95-4.95L5.636 7.05l4.95 4.95-4.95 4.95 1.414 1.414 4.95-4.95z"
    />
  </svg>
);

export const ProductColors = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState(availableOptions[0].id);

  return (
    <>
      <Button title="Open menu" onClick={() => setDrawerOpen(true)}>
        Open Drawer
      </Button>
      <Drawer isOpen={drawerOpen} requestClose={() => setDrawerOpen(false)}>
        <Drawer.Header>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <IconButton
              icon={<CloseIcon />}
              title="Close"
              tabIndex={drawerOpen ? '0' : '-1'}
              onClick={() => setDrawerOpen(false)}
              color="white"
            />
          </div>
        </Drawer.Header>
        <Drawer.Body>
          <div>
            <h4
              style={{
                display: 'block',
                marginBottom: '1.875rem',
                color: '#111',
                fontSize: '.875rem',
                lineHeight: 1.57143,
                fontWeight: 700,
              }}
            >
              Couleurs
            </h4>
            <Group gap={3} direction="column">
              {availableOptions.map((option) => (
                <Button
                  key={option.id}
                  title={option.label}
                  tabIndex={drawerOpen ? '0' : '-1'}
                  color="secondary"
                  variant="outlined"
                  rounded="medium"
                  isSelectable
                  isSelected={selectedOptions === option.id}
                  onClick={() => {
                    setSelectedOptions(option.id);
                    setDrawerOpen(false);
                  }}
                >
                  <div
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'flex-start',
                      padding: '0.75rem 0rem',
                    }}
                  >
                    <img src={option.icon} alt={option.label} width="50px" />
                    <span
                      style={{
                        paddingLeft: '1.5rem',
                        fontSize: '0.875rem',
                        fontWeight: '500',
                        flexGrow: '1',
                        textAlign: 'left',
                      }}
                    >
                      {option.label}
                    </span>
                  </div>
                </Button>
              ))}
            </Group>
          </div>
        </Drawer.Body>
      </Drawer>
    </>
  );
};
