import React, { useState } from 'react';

import { Drawer, Button, IconButton, Group, Grid, Tile } from 'core';

export default {
  title: 'V1/Examples/Drawers',
  decorators: [],
  parameters: {
    componentSubtitle: 'Drawer menu composition',
  },
};

const availableColors = [
  {
    id: '0',
    hex: '#000000',
    label: 'Noir',
  },
  {
    id: '1',
    hex: '#cccccc',
    label: 'Gris',
  },
  {
    id: '2',
    hex: '#bbdbdd',
    label: 'Cyan',
  },
  {
    id: '3',
    hex: '#e3b3c9',
    label: 'Rose',
  },
  {
    id: '4',
    hex: '#FF00FF',
    label: 'Magenta',
  },
  {
    id: '5',
    hex: '#E6E6FA',
    label: 'Lavende',
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

export const Filters = () => {
  const [drawerOpen, setDrawerOpen] = useState(true);
  const [selectedColors, setSelectedColors] = useState([]);

  const selectColor = (id) => {
    if (selectedColors.includes(id)) {
      setSelectedColors(selectedColors.filter((opt) => opt !== id));
    } else {
      setSelectedColors([...selectedColors, id]);
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
              Couleurs
            </h4>
            <Grid cols={[2, 2, 4, 4, 4]} colGap={[2, 2, 4, 4, 4]} rowGap={[2, 2, 4, 4, 4]}>
              {availableColors.map((option) => (
                <Tile key={option.id}>
                  <Button
                    title={option.label}
                    tabIndex={drawerOpen ? '0' : '-1'}
                    color="secondary"
                    variant="outlined"
                    fullWidth
                    isSelectable
                    isSelected={selectedColors.includes(option.id)}
                    onClick={() => {
                      selectColor(option.id);
                      setDrawerOpen(false);
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}
                    >
                      <span
                        style={{
                          height: '25px',
                          width: '25px',
                          borderRadius: '9999px',
                          backgroundColor: option.hex,
                        }}
                      />
                      <span
                        style={{
                          fontSize: '0.875rem',
                          fontWeight: '500',
                        }}
                      >
                        {option.label}
                      </span>
                    </div>
                  </Button>
                </Tile>
              ))}
            </Grid>
          </div>
        </Drawer.Body>
        <Drawer.Footer>
          <Group gap={2} fullWidth>
            <Button
              title="Clear all filters"
              tabIndex={drawerOpen ? '0' : '-1'}
              color="secondary"
              isDisabled
            >
              Effacer tout
            </Button>
            <Button
              title="Show 45 results"
              tabIndex={drawerOpen ? '0' : '-1'}
              color="black"
              onClick={() => setDrawerOpen(false)}
            >
              Résultat (45)
            </Button>
          </Group>
        </Drawer.Footer>
      </Drawer>
    </>
  );
};
