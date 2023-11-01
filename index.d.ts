export interface langHantType {
  changeLanguage: (string: '简体' | '繁体') => void;
  handleTran: (dom: Document | undefined) => void;
  pauseObserver: () => void;
  restartObserver: () => void;
}
declare var langHant: langHantType;
export default langHant;
