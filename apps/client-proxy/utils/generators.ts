import { DSEP_SEARCH_FILTER } from './types';

export const contextGenerator = (
  transactionId: string,
  action: string,
  bap_uri: string,
  bap_id: string,
) => {
  return {
    transaction_id: transactionId,
    message_id: transactionId,
    action: action,
    timestamp: new Date(Date.now()),
    domain: 'dsep:courses',
    country: 'IND',
    city: '',
    core_version: '0.9.3',
    bap_uri: bap_uri,
    bap_id: bap_id,
  };
};

// export const messageGenerator = () => { };

export const generateOrder = (action: string) => {
  switch (action) {
    case 'select':
      break;
    case 'init':
      break;
    case 'confirm':
      break;
    default:
      break;
  }
};

export const intentGenerator = (intentFilters: DSEP_SEARCH_FILTER) => {
  return {
    intent: {
      provider: {
        descriptor: {
          name: intentFilters.provider,
        },
      },
      item: {
        descriptor: {
          name: intentFilters.query,
        },
        price: {
          currency: 'INR',
          minimum_value: intentFilters.min_price,
          maximum_value: intentFilters.max_price,
        },
        rating: intentFilters.rating,
        tags: {
          course_level: intentFilters.course_level,
          course_mode: intentFilters.course_mode,
          competency: intentFilters.competency,
          exams: intentFilters.exams,
          subjects: intentFilters.subjects,
          isCertified: intentFilters.isCertified === false ? 'N' : 'Y',
          course_credits: intentFilters.course_credits === false ? 'N' : 'Y',
          course_duration: intentFilters.course_duration,
        },
      },
      category: {
        descriptor: {
          name: intentFilters.course_category,
        },
      },
      fulfillment: {
        type: intentFilters.course_type,
        customer: {
          person: {
            contact: {
              tags: {
                email: intentFilters.seller_email,
              },
            },
          },
        },
        agent: {
          name: intentFilters.seller_name,
        },
      },
    },
  };
};

export const catalogueGenerator = (
  query: string,
  response: ReadonlyArray<DSEP_SEARCH_FILTER>,
) => {
  const providerWise = {};

  response.map((item) => {
    if (!providerWise[item.provider]) {
      providerWise[item.provider] = [item];
    } else {
      providerWise[item.provider].push(item);
    }
  });

  return {
    catalogue: {
      descriptor: {
        name: `Catalogue for search query: ${query}`,
      },
      providers: Object.keys(providerWise).map((provider) => {
        return {
          id: provider,
          descriptor: {
            name: provider,
          },
          items: providerWise[provider].map((item: any) => {
            return {
              id: item.id,
              descriptor: {
                name: item.name,
              },
              price: {
                currency: 'INR',
                value: item.maximum_value,
                maximum_value: item.maximum_value,
                minimum_value: item.minimum_value,
              },
              provider: {
                id: provider,
              },
              fulfilments: {
                type: item.course_type,
              },
              tags: {
                course_level: item.course_level,
                competency: item.competency,
                exams: item.exams,
                subjects: item.subjects,
                isCertified: item.isCertified ? 'Y' : 'N',
              },
            };
          }),
        };
      }),
    },
  };
};