import React from 'react'
import '../../componentscss/footer.css'

class Footer extends React.Component{
    // constructor(props)
    // {
    //     super(props);
    // }
    render()
    {
        return(
            <h4 className="footer">{this.props.categories}</h4>
        )
    }
}

export default Footer;