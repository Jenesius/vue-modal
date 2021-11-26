import { Router } from "vue-router";
declare function useModalRouter(component: Object): {
    getModalObject: () => any;
    _isModal: boolean;
    close(v?: boolean): Promise<any>;
    initialize: () => Promise<void>;
    setup: () => () => null;
};
declare namespace useModalRouter {
    var init: (router: Router) => void;
}
export default useModalRouter;
