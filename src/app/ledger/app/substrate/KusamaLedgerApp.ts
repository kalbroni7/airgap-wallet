import { newKusamaApp, SubstrateApp } from '@zondax/ledger-polkadot'
import { KusamaProtocol, SubstrateProtocol } from 'airgap-coin-lib'

import { SubstrateLedgerApp } from './SubstrateLedgerApp'

export class KusamaLedgerApp extends SubstrateLedgerApp {
  protected readonly protocol: SubstrateProtocol = new KusamaProtocol()

  protected getApp(): SubstrateApp {
    return newKusamaApp(this.connection.transport)
  }
}
