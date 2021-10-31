import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {

    const { allContexts } = useAuth();
    const { user, isLoading } = allContexts;

    if (isLoading) {
        return (
            <div className="container mt-4 text-center" style={{ height: "500px" }}>
                <button className="btn btn-primary" type="button" disabled>
                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    Loading...
                </button>
            </div>
        )
    }

    return (
        <Route
            {...rest}
            render={({ location }) => user?.email ? children : <Redirect
                to={{
                    pathname: "/login",
                    state: { from: location }
                }}
            ></Redirect>}
        >

        </Route>
    );
};

export default PrivateRoute;