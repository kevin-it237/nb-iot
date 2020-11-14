export const mainRoot = {
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'nbiot.home',
              options: {
                topBar: {
                  visible: false,
                  drawBehind: true,
                  animate: false
                }
              }
            }
          }
        ]
      }
    }
};
  
export const loginRoot = {
    root: {
      component: {
        name: 'nbiot.login',
        options: {
          statusBar: {
            backgroundColor: '#0f63bc'
          }
        },
        statusBar: {
          backgroundColor: '#0f63bc'
        },
      }
    }
}; 

export const profileRoute = {
  component: {
    name: 'nbiot.profile',
    options: {
      topBar: {
        title: {
          text: 'Account'
        }
      }
    }
  }
}

// Coverage planning

export const coverageRoute = {
  component: {
    name: 'nbiot.coverage',
    options: {
      topBar: {
        title: {
          text: 'Coverage Planning'
        }
      }
    }
  }
}

export const linkbudgetRoute = (props) =>( {
  component: {
    name: 'nbiot.linkbudget',
    options: {
      topBar: {
        title: {
          text: 'Link Budget'
        }
      }
    },
    passProps: props
  }
})

export const propagationmodelRoute = (props) =>({
  component: {
    name: 'nbiot.propagationmodel',
    options: {
      topBar: {
        title: {
          text: 'Prop, Cells & Results'
        }
      }
    },
    passProps: props
  }
})

// Capacity planning

export const capacityPlanningRoute = {
  component: {
    name: 'nbiot.capacityplanning',
    options: {
      topBar: {
        title: {
          text: 'Capacity Planning'
        }
      }
    }
  }
}

export const densityPlanningRoute = {
  component: {
    name: 'nbiot.densityplanning',
    options: {
      topBar: {
        title: {
          text: 'Density Planning Procedure'
        }
      }
    }
  }
}

export const servicePlanningRoute = {
  component: {
    name: 'nbiot.serviceplanning',
    options: {
      topBar: {
        title: {
          text: 'Service Planning Procedure'
        }
      }
    }
  }
}

export const planningResultsRoute = (props) => ({
  component: {
    name: 'nbiot.planningresults',
    options: {
      topBar: {
        title: {
          text: 'Planning Results'
        }
      }
    },
    passProps: props
  }
})


///////// CUSTUMER SPACE  /////////
export const customerRoute = {
  component: {
    name: 'nbiot.customerspace',
    options: {
      topBar: {
        title: {
          text: 'Customer Space'
        }
      }
    }
  }
}

export const serviceDetailsRoute = {
  component: {
    name: 'nbiot.servicedetails',
    options: {
      topBar: {
        title: {
          text: 'Service Details'
        }
      }
    }
  }
}
