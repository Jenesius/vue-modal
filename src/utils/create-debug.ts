import debug from "debug";

export default function createDebug(scope: string) {
	return debug(`jenesius-vue-modal:${scope}`);
}