const Dropdown = props => (
  <div className="dropdown">
    <button onClick={props.onToggle}>
      Selected option: {props.data[props.optionSelected]}
    </button>
    <ul className={props.isOpen ? 'active' : null}>
      {props.data.map((item, i) => {
        return (
          <li
            key={i}
            className={i === props.optionSelected ? 'selected' : null}
            onClick={() => props.onSelect(i)}
          >
            {item}
          </li>
        );
      })}
    </ul>
  </div>
);

<li
  className="dd-list-item"
  key={item.title}
  onClick={() => toggleItem(item.id, item.key)}
>
  {item.title} {item.selected && <FontAwesome name="check" />}
</li>;

this.state = {
  location: [
    {
      id: 0,
      title: 'New York',
      selected: false,
      key: 'location',
    },
    {
      id: 1,
      title: 'Dublin',
      selected: false,
      key: 'location',
    },
    {
      id: 2,
      title: 'California',
      selected: false,
      key: 'location',
    },
    {
      id: 3,
      title: 'Istanbul',
      selected: false,
      key: 'location',
    },
    {
      id: 4,
      title: 'Izmir',
      selected: false,
      key: 'location',
    },
    {
      id: 5,
      title: 'Oslo',
      selected: false,
      key: 'location',
    },
  ],
};
