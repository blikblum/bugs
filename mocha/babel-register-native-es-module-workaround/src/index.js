export const withLog = ctorOrDescriptor => {
  const { kind, elements } = ctorOrDescriptor;
  return {
    kind,
    elements,
    finisher(ctor) {
      return class extends ctor {
        log() {
          return 'log'
        }
      };
    }
  };
};
