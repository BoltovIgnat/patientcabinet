import React from 'react';
import { connect } from 'react-redux';

import AsyncSelectMedMap from './AsyncSelectMedMap';
import {
  doctorsTabAsyncInputValue,
  doctorsTabCountShowImg,
  doctorsTabDictionaryName,
  doctorsTabSliderData,
  doctorsTabUrl,
  doctorsTabAdditionCountShowImg
} from "../../../../model/actions/dataAction";

const mapStateToProps = state => ({
  sliderData: state.dataReducer.sliderData,
  sliderUrl: state.dataReducer.sliderUrl,
  countShowImg: state.dataReducer.countShowImg,
  dictionaryName: state.dataReducer.dictionaryName,
  asyncInputValue: state.dataReducer.asyncInputValue,
  additionCountShowImg: state.dataReducer.additionCountShowImg
});

const mapDispatchToProps = dispatch => ({
  doctorsTabSliderData: sliderData => dispatch(doctorsTabSliderData(sliderData)),
  doctorsTabUrl: sliderUrl => dispatch(doctorsTabUrl(sliderUrl)),
  doctorsTabCountShowImg: countShowImg => dispatch(doctorsTabCountShowImg(countShowImg)),
  doctorsTabDictionaryName: dictionaryName => dispatch(doctorsTabDictionaryName(dictionaryName)),
  doctorsTabAsyncInputValue: asyncInputValue => dispatch(doctorsTabAsyncInputValue(asyncInputValue)),
  doctorsTabAdditionCountShowImg: asyncInputValue => dispatch(doctorsTabAdditionCountShowImg(asyncInputValue)),
});

export default connect(mapStateToProps, mapDispatchToProps) (AsyncSelectMedMap);