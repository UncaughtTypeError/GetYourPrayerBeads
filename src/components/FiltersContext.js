import React from 'react';
import { withStyles } from '@material-ui/core/styles';
// Material Components
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';

const defaultContextData = {
  filters: [
    { id: 1, val: `All`, active: true, }
  ]
};

const FilterContext = React.createContext(defaultContextData);
const useFilters = () => React.useContext(FilterContext);

const FiltersProvider = (props) => {

  const { dataFilters, children } = props;

  const initialFilters = () => {
    return (
      dataFilters.map(filter => (filter))
    )
  }

  const [filters, setFilters] = React.useState(initialFilters);
  const [allActive, setAllFilters] = React.useState(true);

  const handleChangeCheckbox = (id, val, event) => {
    setAllFilters (() => val === 'All' ? true : false);
    setFilters(
      filters.map(filter => {
        if (val === 'All') {
          return { ...filter, active: true };
        } else if (filter.id === id) {
          if (allActive) { filters[0].active = false };
          filter.active = !filter.active;
          return filter;
        } else {
          return filter;
        }
      })
    )
  };

  const FilterForm = withStyles(theme => ({
    formGroup: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      [theme.breakpoints.down('sm')]: {  
        justifyContent: 'space-around',
      },
    },
    formWrap: {
      padding: '15px',
      margin: '16px 0',
      [theme.breakpoints.down('xs')]: {
        display: 'none',
      },
    },
  }))(props => {
    const { classes } = props;
    return (
      <Paper className={classes.formWrap}>
        <FormGroup className={classes.formGroup}>
          {filters.map(filter => (
            <FormControlLabel
              key={filter.id}
              control={
                <Checkbox
                  data-id={filter.id}
                  value={filter.val}
                  color="primary"
                  checked={allActive ? true : filter.active}
                  onChange={(event) => handleChangeCheckbox(filter.id, filter.val, event.target.checked)}
                />
              }
              label={filter.val}
            />
          ))}
        </FormGroup>
      </Paper>
    );
  });

  return (
    <FilterContext.Provider
      value={{
        allActive: allActive,
        filters: filters,
      }}
    >
      <FilterForm />
      {children}
    </FilterContext.Provider>
  )

}

export { FiltersProvider, useFilters }