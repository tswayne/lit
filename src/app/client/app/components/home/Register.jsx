import React from 'react';

export default function({loginOnClick}) {
  return(
    <div className="row">
      <div className="col-xs-6">
        <form method="post" action="/register" >
          <div className="form-group">
            <label>Username</label>
            <input type="text" name="username" className="form-control" placeholder="Username" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" name="password" className="form-control" placeholder="Password" />
          </div>
          <div className="form-group">
            <label>Confirm Password</label>
            <input type="password" name="confirmation" className="form-control" placeholder="Password" />
          </div>
          <button type="submit" className="btn btn-default">Submit</button> or <span onClick={loginOnClick}>Log in</span>
        </form>
      </div>
    </div>
  )
}
