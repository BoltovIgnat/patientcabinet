import React from 'react';
import { connect } from "react-redux";

import SliderTemplate from './SliderTemplate';
import {
  doctorsTabSliderData,
  doctorsTabUrl,
  doctorsTabCountShowImg,
  doctorsTabDictionaryName, doctorsTabAsyncInputValue
} from "../../../../model/actions/dataAction";

const mapStateToProps = state => ({
  sliderDataProps: state.dataReducer.sliderData,
  countShowImg: state.dataReducer.countShowImg,
  sliderUrl: state.dataReducer.sliderUrl,
  dictionaryName: state.dataReducer.dictionaryName,
  asyncInputValue: state.dataReducer.asyncInputValue
});

const mapDispatchToProps = dispatch => ({
  doctorsTabSliderData: sliderData => dispatch(doctorsTabSliderData(sliderData)),
  doctorsTabUrl: sliderUrl => dispatch(doctorsTabUrl(sliderUrl)),
  doctorsTabCountShowImg: countShowImg => dispatch(doctorsTabCountShowImg(countShowImg)),
  doctorsTabDictionaryName: dictionaryName => dispatch(doctorsTabDictionaryName(dictionaryName)),
  doctorsTabAsyncInputValue: asyncInputValue => dispatch(doctorsTabAsyncInputValue(asyncInputValue)),
});

export default connect(mapStateToProps, mapDispatchToProps) (SliderTemplate);
