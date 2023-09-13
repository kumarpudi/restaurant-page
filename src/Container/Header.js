import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
const Header = ({ count }) => {
  return (
    <div>
      <nav className="navbar navbar-light">
        <div style={ {width:"75%",alignItems:"center" }}>
          <h3 style={{textAlign:"center" ,paddingLeft:"30%"}}>Restaurant</h3>
        </div>
        <div style={{right:'0', width:"auto"}} >
          <button className="btn btn-secondary" >
            <Link to="/orders"style={{ color: "white", textDecoration:'none' }}>Orders</Link><span className="badge bg-secondary">{count}</span>
          </button>
        </div>
      </nav>
    </div>
  );
};
const mapStateToProps = (state) => ({
  count: state.orderreducer.length,
});

export default connect(mapStateToProps)(Header);
