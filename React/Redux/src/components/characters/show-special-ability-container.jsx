import  { connect } from 'react-redux';
import ShowSpecialAbility from './show-special-ability';

const mapStateToProps = (state) => ({currentlyPlaying: state.currentlyPlaying});

const ShowSpecialAbilityContainer = connect(mapStateToProps)(ShowSpecialAbility);

export default ShowSpecialAbilityContainer;

