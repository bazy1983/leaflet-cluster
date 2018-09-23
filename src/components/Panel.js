import React from "react";

const Panel = (props) =>  (
            <div className="topRight">
                <button className="btn-floating btn pulse corner" onClick={props.toggleSettings}><i className="material-icons">settings</i></button>
                <div className={props.showSettings?"controlPanel z-depth-2 valign-wrapper expand":"controlPanel z-depth-2 valign-wrapper"}>
                    <div style={{ margin: "0px auto" }}>
                        <div style={{marginBottom:"20px"}}>
                            <button className="btn" onClick={props.markers} >{props.text}</button>
                        </div>
                        <div className="switch">
                            <label>
                                Scatter
                            <input type="checkbox" onChange={props.clusterize} />
                                <span className="lever"></span>
                                Cluster
                        </label>
                        </div>
                    </div>
                </div>
            </div>
        )

export default Panel;