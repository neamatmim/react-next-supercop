const EnhanceDropdown = ComposedComponent =>
  class extends Component {
    constructor() {
      super();
      this.state = { isOpen: false };
      this.onToggle = this.onToggle.bind(this);
      this.handleDocumentClick = this.handleDocumentClick.bind(this);
      this.onSelect = this.onSelect.bind(this);
    }
    componentDidMount() {
      window.addEventListener('click', this.handleDocumentClick);
    }
    componentWillUnmount() {
      window.removeEventListener('click', this.handleDocumentClick);
    }
    handleDocumentClick() {
      if (this.state.isOpen) {
        this.onToggle();
      }
    }
    onToggle() {
      this.setState({ isOpen: !this.state.isOpen });
    }
    onSelect(option) {
      this.onToggle(); // Close dropdown
      // Call parent callback or maybe a Redux/Flux action?
      if (this.props.onSelect) this.props.onSelect(option);
    }
    render() {
      return (
        <div onClick={e => e.stopPropagation()}>
          <ComposedComponent
            {...this.props}
            onToggle={this.onToggle}
            onSelect={this.onSelect}
            isOpen={this.state.isOpen}
            optionSelected={this.props.optionSelected}
            data={this.props.data}
          />
        </div>
      );
    }
  };
===========================
const EnhanceDropdown = ComposedComponent =>
  class extends Component {
    state = {
      showDropdown: false,
    };

    handleShowDropdown = event => {
      event.preventDefault();
      this.setState({ showDropdown: true }, () => {
        document.addEventListener('click', this.handleCloseDropdown);
      });
    };
    handleCloseDropdown = () => {
      if (!this.dropdownMenu.contains(event.target)) {
        //ref={(element) => { this.dropdownMenu = element;  }}
        this.setState({ showDropdown: false }, () => {
          document.removeEventListener('click', this.handleCloseDropdown);
        });
      }
    };
    onSelect(option) {
      this.onToggle(); // Close dropdown
      // Call parent callback or maybe a Redux/Flux action?
      if (this.props.onSelect) this.props.onSelect(option);
    }
    static getDerivedStateFromProps(nextProps) {
      const count = nextProps.list.filter(function(a) {
        return a.selected;
      }).length;
      console.log(count);
      if (count === 0) {
        return { headerTitle: nextProps.title };
      } else if (count === 1) {
        return { headerTitle: `${count} ${nextProps.titleHelper}` };
      } else if (count > 1) {
        return { headerTitle: `${count} ${nextProps.titleHelper}s` };
      }
    }
    toggleSelected(id, key) {
      let temp = this.state[key];
      temp[id].selected = !temp[id].selected;
      this.setState({
        [key]: temp,
      });
    }
    render() {
      return (
        <div onClick={e => e.stopPropagation()}>
          <ComposedComponent
            {...this.props}
            onToggle={this.onToggle}
            onSelect={this.onSelect}
            isOpen={this.state.isOpen}
            optionSelected={this.props.optionSelected}
            data={this.props.data}
          />
        </div>
      );
    }
  };
