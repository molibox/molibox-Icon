import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const propTypes = {
  type: PropTypes.string
  
};
/**
 *  badge 默认显示内容1
 */
const defaultProps = {
	clsPrefix: '',
	className:'uf',
	type: ''
};

class Icon extends Component {
	constructor(props) {
		super(props);
	}
	render(){
		let {type,className,clsPrefix, ...others} = this.props;
		
		
		
		if(className == 'iconfont'){
			//iconfont icon-qq
			return(
				<i {...others} className={classnames(className,type)}></i> 
			)	
		}else{
			//uf-search
			let ufType = classnames(clsPrefix,type);
			return(
				<i {...others} className={classnames(className, ufType)}></i> 
			)
		}
	}
}
Icon.defaultProps = defaultProps;
Icon.propTypes = propTypes;

export default Icon;