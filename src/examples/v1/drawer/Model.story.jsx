import React, { useState } from 'react';

import { Drawer, Button, IconButton, Grid, Tile } from 'core';

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
    label: 'Iphone 11 pro max',
  },
  {
    id: '1',
    label: 'Iphone 11 pro',
  },
  {
    id: '2',
    label: 'Iphone 11',
  },
  {
    id: '3',
    label: 'Iphone XS Max',
  },
  {
    id: '4',
    label: 'Iphone X',
  },
  {
    id: '5',
    label: 'Iphone 8+',
  },
  {
    id: '6',
    label: 'Iphone 8',
  },
  {
    id: '7',
    label: 'Iphone 7+',
  },
  {
    id: '8',
    label: 'Iphone 7',
  },
  {
    id: '9',
    label: 'Iphone 6S+',
  },
  {
    id: '10',
    label: 'Samsung A10',
  },
  {
    id: '11',
    label: 'Samsung A50',
  },
  {
    id: '12',
    label: 'Samsung A51',
  },
  {
    id: '13',
    label: 'Samsung A70',
  },
  {
    id: '14',
    label: 'Samsung A71',
  },
  {
    id: '15',
    label: 'Samsung S10',
  },
  {
    id: '16',
    label: 'Samsung S20',
  },
  {
    id: '17',
    label: 'Samsung S20 ultra',
  },
  {
    id: '18',
    label: 'Samsung S8',
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

export const ProductModels = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([availableOptions[0].id]);

  const selectOption = (id) => {
    if (selectedOptions.includes(id)) {
      const newSelection = selectedOptions.filter((opt) => opt !== id);

      if (newSelection.length > 0) {
        setSelectedOptions(newSelection);
      }
    } else {
      setSelectedOptions([...selectedOptions, id]);
    }
  };

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
              Models d&apos;appareils
            </h4>
            <Grid cols={[2, 2, 2, 2, 2]} colGap={[4, 4, 4, 4, 4]} rowGap={[4, 4, 4, 4, 4]}>
              {availableOptions.map((option) => (
                <Tile key={option.id}>
                  <Button
                    title={option.label}
                    tabIndex={drawerOpen ? '0' : '-1'}
                    color="secondary"
                    variant="outlined"
                    rounded="medium"
                    fullWidth
                    isSelectable
                    isSelected={selectedOptions.includes(option.id)}
                    onClick={() => {
                      selectOption(option.id);
                      setDrawerOpen(false);
                    }}
                  >
                    <span style={{ padding: '0.75rem 0' }}>{option.label}</span>
                  </Button>
                </Tile>
              ))}
            </Grid>
          </div>
        </Drawer.Body>
      </Drawer>
    </>
  );
};
