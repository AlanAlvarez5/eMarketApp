import React, {Component} from 'react';

export default class Profile {
    
    render() {
        return (
            <div class="container p-4">
                <div class="row">
                    <div class="col-md-4 mx-auto">
                        <div class="card text-center">
                            <div class="card-body">
                                {/*
                                <h3>Welcome {{user.nombre}}</h3>
                                <h4>{{user.username}}</h4>
                                */}
                                <a href="/links" class="btn btn-primary m-4">Save your Links</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
