import React, { Component } from "react";
import { connect } from "react-redux";
import { getUsers } from "../../actions";
class Users extends Component {
  componentDidMount() {
    this.props.getUsers();
  }
  render() {
    const imgStyle = {
      hight: "auto",
      width: "80%",
      border: "4px solid RebeccaPurple ",
      borderRadius: "5%"
    };
    const userStyle = {
      width: "50%",
      margin: "0 auto",
      color: "olive"
    };
    return (
      <>
        {this.props.users.length > 0 &&
          this.props.users.map(user => (
            <article style={userStyle}>
              <div>
                <h1>{`${user.first_name} ${user.last_name}`}</h1>
                <h4>{user.email}</h4>
                <img style={imgStyle} src={user.avatar} alt="" />
              </div>
            </article>
          ))}
      </>
    );
  }
}

const mapDispatchToProps = {
  getUsers: getUsers
};

const mapStateToProps = state => ({
  users: state.users.users
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);
