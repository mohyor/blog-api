import * as express from "express"
import * as Promise from 'bluebird'

import * as dataModel from '../../data-model'
import * as components from '../../components/interfaces'
import * as storage from '../storage/interfaces'
import * as session from '../session/interfaces'
import * as moders from '../helpers/moders/interfaces'
import * as helpers from '../../procedures/core/common/helpers/interfaces'

import * as interfaces from './interfaces'
import * as events from './events/interfaces'

export interface Instance extends components.MiddlewareBorn {
    readonly signIn: SignIn;
    readonly signOut: SignOut;
    readonly getCurrentUser: GetCurrentUser;
    readonly authPassword: AuthPassword;
    readonly CreateHashedPassword: CreateHashedPassword;
}

export interface Constructor {
    new(
        events: events.Instance, 
        checkThrow: moders.CheckThrow, 
        getUsers: storage.core.user.Instance["get"],
        getUserById: storage.core.user.Instance["getById"], 
        setUserInSession: session.SetCurrentUser,
        getUserFromSession: session.GetCurrentUser,
        signOutFromSession: session.SignOut,
        cleanUsers: helpers.CleanUsers
    ): Instance;
}

export interface SignIn {
    (emailAddress: string, password: string, req: express.Request, forceThrow?: boolean): Promise<dataModel.core.user.Super>
}

export interface SignOut {
    (req: express.Request, forceThrow?: boolean): Promise<void>;
}

export interface GetCurrentUser {
    (req: express.Request, forceThrow?: boolean): Promise<dataModel.core.user.Super>
}

export interface AuthPassword {
    (userId: string, password: string, forceThrow?: boolean): Promise<dataModel.core.user.Super>
}

export interface CreateHashedPassword {
    (password: string, forceThrow?: boolean): Promise<string>
}