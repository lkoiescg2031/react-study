import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class SearchResultTable extends PureComponent {
  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        age: PropTypes.number,
      }),
    ),
  };
  static defaultProps = {
    items: [],
  };
  render() {
    const { items } = this.props;
    return (
      <table border="1" width="100%">
        <tr>
          <td>아이디</td>
          <td>이름</td>
          <td>나이</td>
        </tr>
        {items.map(({ id, name, age }) => (
          <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{age}</td>
          </tr>
        ))}
      </table>
    );
  }
}
