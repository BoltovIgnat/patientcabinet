import React from 'react';
import { connect } from 'react-redux';

import DoctorsTab from './Doctors.tab';
import {
  doctorsTabCountShowImg,
  doctorsTabSliderData,
  doctorsTabUrl,
  doctorsTabDictionaryName,
  doctorsTabAsyncInputValue
} from '../../../../../model/actions/dataAction';

const mapStateToProps = state => ({
  sliderData: state.dataReducer.sliderData,
  sliderUrl: state.dataReducer.sliderUrl,
  countShowImg: state.dataReducer.countShowImg,
  dictionaryName: state.dataReducer.dictionaryName,
  asyncInputValue: state.dataReducer.asyncInputValue,
  additionCountShowImg: state.dataReducer.additionCountShowImg,
});

const mapDispatchToProps = dispatch => ({
  doctorsTabSliderData: sliderData => dispatch(doctorsTabSliderData(sliderData)),
  doctorsTabUrl: sliderUrl => dispatch(doctorsTabUrl(sliderUrl)),
  doctorsTabCountShowImg: countShowImg => dispatch(doctorsTabCountShowImg(countShowImg)),
  doctorsTabDictionaryName: dictionaryName => dispatch(doctorsTabDictionaryName(dictionaryName)),
  doctorsTabAsyncInputValue: asyncInputValue => dispatch(doctorsTabAsyncInputValue(asyncInputValue)),
});

export default connect(mapStateToProps, mapDispatchToProps) (DoctorsTab);