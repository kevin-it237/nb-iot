export const mainRoot = {
    root: {
      stack: {
        options:{ topBar: { visible: false, height: 0, } },
        children: [
          {
            component: {
              name: 'nbiot.home'
            }
          }
        ]
      }
    }
};
  
export const loginRoot = {
    root: {
      component: {
        name: 'nbiot.login'
      }
    }
}; 