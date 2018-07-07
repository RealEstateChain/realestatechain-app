import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  menu: {
    width: 200,
  },
});

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];

class TextFields extends React.Component {
  state = {
    title: 'Luxury Two Bedroom Apartment in the Seaport',
    address: '',
    price: '720000',
    currency: 'USD',
  };

  handleChange = field => event => {
    this.setState({
      [field]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="title"
          label="Title"
          InputLabelProps={{
            shrink: true,
          }}
          placeholder="Enter a title for the property"
          helperText="Enter a title for the property"
          value={this.state.title}
          onChange={this.handleChange('title')}
          fullWidth
          margin="normal"
        />
        <TextField
          id="address"
          label="Address"
          multiline
          rowsMax="4"
          value={this.state.address}
          onChange={this.handleChange('address')}
          className={classes.textField}
          margin="normal"
        />
        <TextField
          id="extra"
          label="Extra (JSON)"
          multiline
          rowsMax="99"
          value={this.state.extraJson}
          onChange={this.handleChange('extraJson')}
          className={classes.textField}
          margin="normal"
        />
        <TextField
          id="price"
          label="Price"
          value={this.state.price}
          onChange={this.handleChange('price')}
          type="number"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
        />
        <TextField
          id="select-currency"
          select
          label="Currency"
          className={classes.textField}
          value={this.state.currency}
          onChange={this.handleChange('currency')}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
          helperText="Please select your currency"
          margin="normal"
        >
          {currencies.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </form>
    );
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFields);