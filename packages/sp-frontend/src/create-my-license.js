import React, { Component } from "react";
import {subscribe} from "./sp-binding";
import styled from "styled-components";
import {parse as parseUrl} from "url";
import {GoodButton} from "sp-styles";

const ServerEntry = styled.div`
  font-size: 1.6em;
`;

const Hostname = styled.span`

`;
const radioInput = styled.input`
  border: none;
  border-bottom: 2px solid #333;
  background-color: transparent;
  }
`;

export class CreateMyLicense extends Component {
	  static propTypes = {
    SP: React.PropTypes.object,
  };

  constructor() {
    super();
    this.state = {
      slug: "",
      creating: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({slug: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({creating: true});
    this.props.SP.licenses.create({slug: this.state.slug})
    .catch((err) => {
      this.props.SP.error(err);
      this.setState({creating: false});
    });
  }

  componentDidMount() {
    this.slugInput.focus();
   }

render () {
	const {hostname} = parseUrl(this.props.SP.server);
	return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<p> create your channel: </p>
					<ServerEntry>
					<Hostname>{hostname}/</Hostname>
					<div id="freedoms">
						<h2>License Features</h2>
						<div class="subtitle">
							Your choices on this panel will update the other panels on this page.
						</div>
						<h4>Allow adaptions of your work to be shafed?</h4>
						<ul>
							<li>
								<input type="radio" checked="checked" value="y" id="question_3-5" onChange={this.handleChange}>
									<label for="question_3-5">Yes</label>
								</input>
							</li>
							<li>
								<input type="radio" checked="checked" value="n" id="question_3-6" onChange={this.handleChange}>
									<label for="question_3-6">No</label>
								</input>
							</li>
							<li>
								<input type="radio" checked="checked" value="sa" id="question_3-7" onChange={this.handleChange}>
									<label for="question_3-7">Yes, as along as others share alike</label>
								</input>
							</li>
						</ul>
						<h4>Allow commerical uses of your work?</h4>
						<ul>
						<li>
							<input type="radio" checked="checked" value="y" id="question_2-3" onChange={this.handleChange}>
								<label for="question_2-3">Yes</label>
							</input>
						</li>
						<li>
							<input type="radio" checked="checked" value="n" id="question_2-4" onChange={this.handleChange}>
								<label for="question_2-4">No</label>
							</input>
						</li>
						</ul>

					</div>
					<div id="license">
					</div>
					<GoodButton disabled={this.state.creating} type="submit">{this.state.creating ? "Creating..." : "Create"}</GoodButton>
				</ServerEntry>
				</form>
			</div>
		);

	}
}

export default subscribe(CreateMyLicense);


/*		<div id="jurisdiction_section" class="help_highlight">
						      <div class="help_button" onclick="CHOOSER.CALL.popup('jurisdiction');"></div>
						      <h4>License Jurisdiction:</h4>
						      <select id="field_jurisdiction" name="field_jurisdiction">
						        
						        <option value="" selected="selected">
						          International
						        </option>
						        
						        <option value="ar">Argentina</option>
						        
						        <option value="au">Australia</option>
						        
						        <option value="at">Austria</option>
						        
						        <option value="be">Belgium</option>
						        
						        <option value="br">Brazil</option>
						        
						        <option value="bg">Bulgaria</option>
						        
						        <option value="ca">Canada</option>
						        
						        <option value="cl">Chile</option>
						        
						        <option value="cn">China Mainland</option>
						        
						        <option value="co">Colombia</option>
						        
						        <option value="cr">Costa Rica</option>
						        
						        <option value="hr">Croatia</option>
						        
						        <option value="cz">Czech Republic</option>
						        
						        <option value="dk">Denmark</option>
						        
						        <option value="ec">Ecuador</option>
						        
						        <option value="eg">Egypt</option>
						        
						        <option value="ee">Estonia</option>
						        
						        <option value="fi">Finland</option>
						        
						        <option value="fr">France</option>
						        
						        <option value="de">Germany</option>
						        
						        <option value="gr">Greece</option>
						        
						        <option value="gt">Guatemala</option>
						        
						        <option value="hk">Hong Kong</option>
						        
						        <option value="hu">Hungary</option>
						        
						        <option value="igo">IGO</option>
						        
						        <option value="in">India</option>
						        
						        <option value="ie">Ireland</option>
						        
						        <option value="il">Israel</option>
						        
						        <option value="it">Italy</option>
						        
						        <option value="jp">Japan</option>
						        
						        <option value="lu">Luxembourg</option>
						        
						        <option value="mk">Macedonia</option>
						        
						        <option value="my">Malaysia</option>
						        
						        <option value="mt">Malta</option>
						        
						        <option value="mx">Mexico</option>
						        
						        <option value="nl">Netherlands</option>
						        
						        <option value="nz">New Zealand</option>
						        
						        <option value="no">Norway</option>
						        
						        <option value="pe">Peru</option>
						        
						        <option value="ph">Philippines</option>
						        
						        <option value="pl">Poland</option>
						        
						        <option value="pt">Portugal</option>
						        
						        <option value="pr">Puerto Rico</option>
						        
						        <option value="ro">Romania</option>
						        
						        <option value="rs">Serbia</option>
						        
						        <option value="sg">Singapore</option>
						        
						        <option value="si">Slovenia</option>
						        
						        <option value="za">South Africa</option>
						        
						        <option value="kr">South Korea</option>
						        
						        <option value="es">Spain</option>
						        
						        <option value="se">Sweden</option>
						        
						        <option value="ch">Switzerland</option>
						        
						        <option value="tw">Taiwan</option>
						        
						        <option value="th">Thailand</option>
						        
						        <option value="uk">UK: England &amp; Wales</option>
						        
						        <option value="scotland">UK: Scotland</option>
						        
						        <option value="ug">Uganda</option>
						        
						        <option value="us">United States</option>
						        
						        <option value="ve">Venezuela</option>
						        
						        <option value="vn">Vietnam</option>
						        
						      </select>
						    </div> */