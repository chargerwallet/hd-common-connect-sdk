import * as _chargerwallet_hd_core from '@chargerwallet/hd-core';
import { Deferred } from '@chargerwallet/hd-shared';

declare const messagePromises: {
    [key: number]: Deferred<any>;
};
declare const HardwareCommonConnectSdk: _chargerwallet_hd_core.CoreApi;

export { HardwareCommonConnectSdk as default, messagePromises };
