import React, { Component } from 'react';

import Subject from '../components/Subject';
import { Link } from "react-router-dom";
import {
    S3Album
} from 'aws-amplify-react';

class Home extends Component {
    render() {
        return (
            <div className="Info">
                <h3 style={{ marginBottom: 0 }}>I am currently working on migrating my website to AWS Amplify.</h3>

                <S3Album path="wikipedia/" picker />

                {/*<div style={{*/}
                {/*    display: 'flex',*/}
                {/*    flex: 1,*/}
                {/*    flexDirection: 'row',*/}
                {/*    justifyContent: 'space-around'*/}
                {/*}}>*/}
                {/*    <Subject*/}
                {/*        title="Gallery"*/}
                {/*    />*/}
                {/*    <Subject*/}
                {/*        title="Gallery"*/}
                {/*    />*/}
                {/*</div>*/}
                {/*<div style={{ flexDirection: 'row' }}>*/}
                {/*    <Subject*/}
                {/*        title="Gallery"*/}
                {/*    />*/}
                {/*    <Subject*/}
                {/*        title="Gallery"*/}
                {/*    />*/}
                {/*</div>*/}
            </div>
        )
    }
}

export default Home;
