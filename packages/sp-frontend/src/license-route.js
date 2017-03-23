
import React, { Component } from "react";
import SPChannel from "./sp-channel";
// import SPCamera from "./sp-camera";
import styled from "styled-components";
import {subscribe} from "./sp-binding";
import CreateMyLicense from "./create-my-license";

const FlexContainer = styled.div`
  width: 100%;
  height: 100%;
  flex-grow: 1;
  display: flex;
  position: relative;
`;

/**
 * Hacky. Yuck. But it gets the title of the channel up there on the title bar, so I'm fine with
 * it.
 */
const TitleBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  pointer-events: none;
  margin-top: -42px;
  font-size: 2em;
  font-weight: 200;
  margin-left: 0.3em;
`;

const ChannelName = styled.strong`
  font-weight: 600;
  font-size: 0.7em;
  position: relative;
  top: -3px;
`;

export class LicenseRoute extends Component {
  static propTypes = {
    licenses: React.PropTypes.array,
  };

  constructor() {
    super();
    this.state = {};
  }

  render () {
    const license = this.props.licenses[0] || {};
    return (
      <FlexContainer>
        <CreateMyLicense />
      </FlexContainer>
    );
  }
}

export default subscribe(LicenseRoute, function(props, SP) {
  return {
    licenses: SP.licenses.watch({slug: props.match.params.slug}),
  };
});
