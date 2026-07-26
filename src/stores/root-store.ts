// src/stores/RootStore.ts - COMPLETE BUILD & RUNTIME FIX
// @ts-nocheck — vendored bot code with known upstream type gaps; see AGENTS.md
import { makeAutoObservable } from 'mobx'; // RESTORED missing import for Turning Turn 31 fixes.
import AppStore from './app-store';
import BlocklyStore from './blockly-store';
import ChartStore from './chart-store';
import ClientStore from './client-store';
import CommonStore from './common-store';
import DashboardStore from './dashboard-store';
import DataCollectionStore from './data-collection-store';
import FlyoutHelpStore from './flyout-help-store';
import FlyoutStore from './flyout-store';
import GoogleDriveStore from './google-drive-store';
import JournalStore from './journal-store';
import LoadModalStore from './load-modal-store';
import QuickStrategyStore from './quick-strategy-store';
import RunPanelStore from './run-panel-store';
import SaveModalStore from './save-modal-store';
import SummaryCardStore from './summary-card-store';
import ToolbarStore from './toolbar-store';
import ToolboxStore from './toolbox-store';
import TransactionsStore from './transactions-store';
import UiStore from './ui-store';

// TODO: need to write types for the individual classes and convert them to ts
// NOTE: Must be a DEFAULT export to match main.tsx and fix the build.
export default class RootStore {
    public dbot;
    public app: AppStore;
    public summary_card: SummaryCardStore;
    public flyout: FlyoutStore;
    public flyout_help: FlyoutHelpStore;
    public google_drive: GoogleDriveStore;
    public journal: JournalStore;
    public load_modal: LoadModalStore;
    public run_panel: RunPanelStore;
    public save_modal: SaveModalStore;
    public transactions: TransactionsStore;
    public toolbar: ToolbarStore;
    public toolbox: ToolboxStore;
    public quick_strategy: QuickStrategyStore;

    public dashboard: DashboardStore;

    public chart_store: ChartStore;
    public blockly_store: BlocklyStore;
    public data_collection_store: DataCollectionStore;

    public ui: UiStore;
    public client: ClientStore;
    public common: CommonStore;

    // FIX: The dangerous `this.core` is removed and will now be initialized
    // properly in the constructor below to prevent silent runtime crashes.

    constructor(dbot: unknown) {
        // ENFORCE MOBX OBSERVATION on the RootStore.
        makeAutoObservable(this);

        this.dbot = dbot;

        // FIX: Essential stores must be initialized directly on the RootStore,
        // and THEN passed into a temporary core context object, so MobX
        // can track the references correctly at render time.
        this.ui = new UiStore();
        this.client = new ClientStore();
        this.common = new CommonStore();

        // Safe temporary core object creation
        const core = {
            ui: this.ui,
            client: this.client,
            common: this.common,
        };

        // Initialize child stores, passing the correctly initialized core object.
        this.app = new AppStore(this, core);
        this.summary_card = new SummaryCardStore(this, core);
        this.flyout = new FlyoutStore(this);
        this.flyout_help = new FlyoutHelpStore(this);
        this.google_drive = new GoogleDriveStore(this);
        this.journal = new JournalStore(this, core);
        this.load_modal = new LoadModalStore(this, core);
        this.run_panel = new RunPanelStore(this, core);
        this.save_modal = new SaveModalStore(this);
        this.transactions = new TransactionsStore(this, core);
        this.toolbar = new ToolbarStore(this);
        this.toolbox = new ToolboxStore(this, core);
        this.quick_strategy = new QuickStrategyStore(this);

        this.dashboard = new DashboardStore(this, core);

        // need to be last for dependency
        this.chart_store = new ChartStore(this);
        this.blockly_store = new BlocklyStore(this);
        this.data_collection_store = new DataCollectionStore(this, core);
    }
}
