import React from "react";
import { Chart, SisenseContextProvider, ExecuteQuery } from '@sisense/sdk-ui';
import * as DM from './sample-ecommerce';
import { measures } from '@sisense/sdk-data';
import CustomTable from './customTable';

function App() {
  return (
    <div style={{height:'300px', width:'100%'}}>
      <SisenseContextProvider
        url="YOURSISENSEURL" // replace with the URL of your Sisense instance
        token="YOURAPITOKEN"
      >
        <Chart
          dataSet={DM.DataSource}
          chartType={'bar'}
          dataOptions={{
            category: [DM.Category.Category],
            value: [measures.countDistinct(DM.Commerce.Revenue)],
            breakBy: [],
          }}
          styleOptions={{
            legend: {
              enabled: true,
              position: 'bottom',
            },
          }}
          onDataPointClick={(point, nativeEvent) => {
            console.log('clicked', point, nativeEvent);
          }}
        />
        <ExecuteQuery
            dataSource={DM.DataSource}
            dimensions={[
                DM.Category.Category,
                DM.Brand.Brand,
                DM.Commerce.Quantity,
                DM.Commerce.Cost,
                DM.Commerce.Condition
            ]}
            measures={[measures.sum(DM.Commerce.Revenue)]}
            >
            {
            (data) => {
                if (data) {
                    console.log(data)
                    return <CustomTable queryData={data} />;
                }
            }
            }
        </ExecuteQuery>
      </SisenseContextProvider>
    </div>
  );
}
export default App;
