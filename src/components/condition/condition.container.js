import { connect } from 'react-redux';
import ConditionComponent from './condition.component';

const mapStateToProps = (state) => {
 return state.condition;
};

const Condition = connect(
  mapStateToProps
)(ConditionComponent);

export default Condition;