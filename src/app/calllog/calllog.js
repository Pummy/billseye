/* eslint max-len: 0 */
import React,{Component,useState} from 'react';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import '../../assets/styles/calllog.scss';

class BSTable extends React.Component {

  customHeaderClass() {
      return 'custom-header-class';
  }
  
  trClassFormat() {
      // row is the current row data
      return "custom-trall-expand";  // return class name.
  }
  userFieldA(cell, row) {
    return `<span class="alarmoff"><i class="mdi mdi-alarm-off"></i></span> ${cell}`;
  }
  
  render() {
    const selectRow = {
        mode: 'radio',  // single select
    };
    if (this.props.data) {
      return (
        <div>
          <div>
            <BootstrapTable data={ this.props.data } bordered={ false } tableBodyClass='my-expand' 
          selectRow={ selectRow } trClassName={ this.trClassFormat }>
              <TableHeaderColumn dataField='fieldA' className={ this.customHeaderClass }>
                <i class="mdi mdi-phone-outline"></i>
                <span className="menu-title">Call</span>
              </TableHeaderColumn>
              <TableHeaderColumn dataField='' className={ this.customHeaderClass }>
                <i class="mdi mdi-video-outline"></i>
                <span className="menu-title">Video Call</span>
              </TableHeaderColumn>
              <TableHeaderColumn dataField='' className={ this.customHeaderClass }>
                <i class="mdi mdi-email-outline"></i>
                <span className="menu-title">Email</span>
              </TableHeaderColumn>
              <TableHeaderColumn dataField='' className={ this.customHeaderClass }>
                <i class="mdi mdi-comment-outline"></i>
                <span className="menu-title">Message</span>
              </TableHeaderColumn>
              <TableHeaderColumn dataField='fieldB' isKey={ true } className={ this.customHeaderClass }>
                <i class="mdi mdi-account-plus-outline"></i>
                <span className="menu-title">Add Contact</span>
              
              </TableHeaderColumn>
            </BootstrapTable>
    
          </div>
          <div>
            <div className="inputvoice">
              <div className="voicechat">
                <input className="inputstyle" placeholder="Press to Talk"/>
                <span>
                  <i class="mdi mdi-microphone-settings"></i>
                </span>
                <span className="icuploader">
                  <i class="mdi mdi-arrow-up-bold-circle"></i>
                </span>
              </div>
            </div>
          </div>
        </div>);
    } else {
      return (<p>?</p>);
    }
  }
}


const now = new Date();

const ariaLabelProps = {
  calendarAriaLabel: 'Toggle calendar',
  clearAriaLabel: 'Clear value',
  dayAriaLabel: 'Day',
  monthAriaLabel: 'Month',
  nativeInputAriaLabel: 'Date',
  yearAriaLabel: 'Year',
};

const placeholderProps = {
  dayPlaceholder: 'dd',
  monthPlaceholder: 'mm',
  yearPlaceholder: 'yyyy',
};



export default class Calllog extends React.Component {


  state = {
    datas: {
      columns: [
        {
          label: 'Callers',
          field: 'name',
          width: 150,
          attributes: {
            'aria-controls': 'DataTable',
            'aria-label': 'Name'
          }
        },
        {
          label: 'Call Status',
          field: 'callstatus',
          width: 270
        },
        {
          label: 'Time & Date',
          field: 'date',
          sort: 'disabled',
          width: 150
        },
        {
          label: 'Duration',
          field: 'duration',
          sort: 'asc',
          width: 100
        },
        {
          label: 'Bill Status',
          field: 'billstatus',
          width: 200
        },
        {
          label: 'Fee',
          field: 'fee',
          sort: 'disabled',
          width: 100
        },
        {
          label: 'Rate',
          field: 'rate',
          sort: 'disabled',
          width: 100
        }
      ],
      rows: [
        {
          name: 'Jonathan Collins',
          userpic:'Jonathan.png',
          phone:'(123) 456-7890',
          callstatus: 'call_missed',
          date: 'Thu, 14 Feb 9:20 AM',
          duration: '0 sec',
          billstatus: 'alarm_off',
          fee: '$ 0',
          rate: '$ 350',
          expand: [ {
            fieldA: 'Leave him a text about the coffee project...',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: '5 m, 12 s',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: '3 m, 47 s',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: 'Sign Document',
            fieldB: '06/26/20 10:35 AM'
          } ]
        },
        {
          name: 'Gregory Anderson',
          userpic:'Gregory.png',
          phone:'(123) 456-7890',
          callstatus: 'call_received',
          date: 'Thu, 14 Feb 9:31 AM',
          duration: '6 sec',
          billstatus: 'alarm_on',
          fee: '$ 0.58',
          rate: '$ 350',
          expand: [ {
            fieldA: 'Leave him a text about the coffee project...',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: '5 m, 12 s',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: '3 m, 47 s',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: 'Sign Document',
            fieldB: '06/26/20 10:35 AM'
          } ]
        },
        {
          name: 'Alcide Honoré',
          userpic:'Alcide.png',
          phone:'(123) 456-7890',
          callstatus: 'call_made',
          date: 'Thu, 14 Feb 8:05 AM',
          duration: '39 m 17 s',
          billstatus: 'alarm_on',
          fee: '$ 127.53',
          rate: '$ 350',
          expand: [ {
            fieldA: 'Leave him a text about the coffee project...',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: '5 m, 12 s',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: '3 m, 47 s',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: 'Sign Document',
            fieldB: '06/26/20 10:35 AM'
          } ]
        },
        {
          name: 'Logan Ellis',
          userpic:'logan.png',
          phone:'(123) 456-7890',
          callstatus: 'call_missed_outgoing',
          date: 'Thu, 14 Feb 9:31 AM',
          duration: '0 sec',
          billstatus: 'alarm_off',
          fee: '$ 0',
          rate: '$ 350',
          expand: [ {
            fieldA: 'Leave him a text about the coffee project...',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: '5 m, 12 s',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: '3 m, 47 s',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: 'Sign Document',
            fieldB: '06/26/20 10:35 AM'
          } ]
        },
        {
          name: 'Armond Honoré',
          userpic:'Armond.png',
          phone:'(123) 456-7890',
          callstatus: 'call_made',
          date: 'Thu, 14 Feb 9:31 AM',
          duration: '6 sec',
          billstatus: 'alarm_on',
          fee: '$ 0.58',
          rate: '$ 350',
          expand: [ {
            fieldA: 'Leave him a text about the coffee project...',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: '5 m, 12 s',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: '3 m, 47 s',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: 'Sign Document',
            fieldB: '06/26/20 10:35 AM'
          } ]
        },
        {
          name: 'Choco Hong',
          userpic:'Choco.png',
          phone:'(123) 456-7890',
          callstatus: 'call_received',
          date: 'Thu, 14 Feb 9:31 AM',
          duration: '12 sec',
          billstatus: 'alarm_on',
          fee: '$ 1.16',
          rate: '$30',
          expand: [ {
            fieldA: 'Leave him a text about the coffee project...',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: '5 m, 12 s',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: '3 m, 47 s',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: 'Sign Document',
            fieldB: '06/26/20 10:35 AM'
          } ]
        },
        {
          name: 'Jiawei Sun',
          userpic:'Jiawei.png',
          phone:'(123) 456-7890',
          callstatus: 'call_missed_outgoing',
          date: 'Thu, 14 Feb 9:31 AM',
          duration: '0 sec',
          billstatus: 'alarm_off',
          fee: '$ 0',
          rate: '$ 350',
          expand: [ {
            fieldA: 'Leave him a text about the coffee project...',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: '5 m, 12 s',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: '3 m, 47 s',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: 'Sign Document',
            fieldB: '06/26/20 10:35 AM'
          } ]
        },
        {
          name: 'Aaron Honoré',
          userpic:'Aaron.png',
          phone:'(123) 456-7890',
          callstatus: 'call_made',
          date: 'Thu, 14 Feb 9:31 AM',
          duration: '6 sec',
          billstatus: 'alarm_on',
          fee: '$ 0.58',
          rate: '$ 350',
          expand: [ {
            fieldA: 'Leave him a text about the coffee project...',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: '5 m, 12 s',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: '3 m, 47 s',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: 'Sign Document',
            fieldB: '06/26/20 10:35 AM'
          } ]
        },
        {
          name: 'Jonathan Collins',
          userpic:'Jonathan.png',
          phone:'(123) 456-7890',
          callstatus: 'call_missed',
          date: 'Thu, 14 Feb 9:20 AM',
          duration: '0 sec',
          billstatus: 'alarm_off',
          fee: '$ 0',
          rate: '$ 350',
          expand: [ {
            fieldA: 'Leave him a text about the coffee project...',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: '5 m, 12 s',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: '3 m, 47 s',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: 'Sign Document',
            fieldB: '06/26/20 10:35 AM'
          } ]
        },
        {
          name: 'Gregory Anderson',
          userpic:'Gregory.png',
          phone:'(123) 456-7890',
          callstatus: 'call_received',
          date: 'Thu, 14 Feb 9:31 AM',
          duration: '6 sec',
          billstatus: 'alarm_on',
          fee: '$ 0.58',
          rate: '$ 350',
          expand: [ {
            fieldA: 'Leave him a text about the coffee project...',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: '5 m, 12 s',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: '3 m, 47 s',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: 'Sign Document',
            fieldB: '06/26/20 10:35 AM'
          } ]
        },
        {
          name: 'Alcide Honoré',
          userpic:'Alcide.png',
          phone:'(123) 456-7890',
          callstatus: 'call_made',
          date: 'Thu, 14 Feb 8:05 AM',
          duration: '39 m 17 s',
          billstatus: 'alarm_on',
          fee: '$ 127.53',
          rate: '$ 350',
          expand: [ {
            fieldA: 'Leave him a text about the coffee project...',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: '5 m, 12 s',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: '3 m, 47 s',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: 'Sign Document',
            fieldB: '06/26/20 10:35 AM'
          } ]
        },
        {
          name: 'Logan Ellis',
          userpic:'logan.png',
          phone:'(123) 456-7890',
          callstatus: 'call_missed_outgoing',
          date: 'Thu, 14 Feb 9:31 AM',
          duration: '0 sec',
          billstatus: 'alarm_off',
          fee: '$ 0',
          rate: '$ 350',
          expand: [ {
            fieldA: 'Leave him a text about the coffee project...',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: '5 m, 12 s',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: '3 m, 47 s',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: 'Sign Document',
            fieldB: '06/26/20 10:35 AM'
          } ]
        },
        {
          name: 'Armond Honoré',
          userpic:'Armond.png',
          phone:'(123) 456-7890',
          callstatus: 'call_made',
          date: 'Thu, 14 Feb 9:31 AM',
          duration: '6 sec',
          billstatus: 'alarm_on',
          fee: '$ 0.58',
          rate: '$ 350',
          expand: [ {
            fieldA: 'Leave him a text about the coffee project...',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: '5 m, 12 s',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: '3 m, 47 s',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: 'Sign Document',
            fieldB: '06/26/20 10:35 AM'
          } ]
        },
        {
          name: 'Choco Hong',
          userpic:'Choco.png',
          phone:'(123) 456-7890',
          callstatus: 'call_received',
          date: 'Thu, 14 Feb 9:31 AM',
          duration: '12 sec',
          billstatus: 'alarm_on',
          fee: '$ 1.16',
          rate: '$30',
          expand: [ {
            fieldA: 'Leave him a text about the coffee project...',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: '5 m, 12 s',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: '3 m, 47 s',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: 'Sign Document',
            fieldB: '06/26/20 10:35 AM'
          } ]
        },
        {
          name: 'Jiawei Sun',
          userpic:'Jiawei.png',
          phone:'(123) 456-7890',
          callstatus: 'call_missed_outgoing',
          date: 'Thu, 14 Feb 9:31 AM',
          duration: '0 sec',
          billstatus: 'alarm_off',
          fee: '$ 0',
          rate: '$ 350',
          expand: [ {
            fieldA: 'Leave him a text about the coffee project...',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: '5 m, 12 s',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: '3 m, 47 s',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: 'Sign Document',
            fieldB: '06/26/20 10:35 AM'
          } ]
        },
        {
          name: 'Aaron Honoré',
          userpic:'Aaron.png',
          phone:'(123) 456-7890',
          callstatus: 'call_made',
          date: 'Thu, 14 Feb 9:31 AM',
          duration: '6 sec',
          billstatus: 'alarm_on',
          fee: '$ 0.58',
          rate: '$ 350',
          expand: [ {
            fieldA: 'Leave him a text about the coffee project...',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: '5 m, 12 s',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: '3 m, 47 s',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: 'Sign Document',
            fieldB: '06/26/20 10:35 AM'
          } ]
        },
        {
          name: 'Jonathan Collins',
          userpic:'Jonathan.png',
          phone:'(123) 456-7890',
          callstatus: 'call_missed',
          date: 'Thu, 14 Feb 9:20 AM',
          duration: '0 sec',
          billstatus: 'alarm_off',
          fee: '$ 0',
          rate: '$ 350',
          expand: [ {
            fieldA: 'Leave him a text about the coffee project...',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: '5 m, 12 s',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: '3 m, 47 s',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: 'Sign Document',
            fieldB: '06/26/20 10:35 AM'
          } ]
        },
        {
          name: 'Gregory Anderson',
          userpic:'Gregory.png',
          phone:'(123) 456-7890',
          callstatus: 'call_received',
          date: 'Thu, 14 Feb 9:31 AM',
          duration: '6 sec',
          billstatus: 'alarm_on',
          fee: '$ 0.58',
          rate: '$ 350',
          expand: [ {
            fieldA: 'Leave him a text about the coffee project...',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: '5 m, 12 s',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: '3 m, 47 s',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: 'Sign Document',
            fieldB: '06/26/20 10:35 AM'
          } ]
        },
        {
          name: 'Alcide Honoré',
          userpic:'Alcide.png',
          phone:'(123) 456-7890',
          callstatus: 'call_made',
          date: 'Thu, 14 Feb 8:05 AM',
          duration: '39 m 17 s',
          billstatus: 'alarm_on',
          fee: '$ 127.53',
          rate: '$ 350',
          expand: [ {
            fieldA: 'Leave him a text about the coffee project...',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: '5 m, 12 s',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: '3 m, 47 s',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: 'Sign Document',
            fieldB: '06/26/20 10:35 AM'
          } ]
        },
        {
          name: 'Logan Ellis',
          userpic:'logan.png',
          phone:'(123) 456-7890',
          callstatus: 'call_missed_outgoing',
          date: 'Thu, 14 Feb 9:31 AM',
          duration: '0 sec',
          billstatus: 'alarm_off',
          fee: '$ 0',
          rate: '$ 350',
          expand: [ {
            fieldA: 'Leave him a text about the coffee project...',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: '5 m, 12 s',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: '3 m, 47 s',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: 'Sign Document',
            fieldB: '06/26/20 10:35 AM'
          } ]
        },
        {
          name: 'Armond Honoré',
          userpic:'Armond.png',
          phone:'(123) 456-7890',
          callstatus: 'call_made',
          date: 'Thu, 14 Feb 9:31 AM',
          duration: '6 sec',
          billstatus: 'alarm_on',
          fee: '$ 0.58',
          rate: '$ 350',
          expand: [ {
            fieldA: 'Leave him a text about the coffee project...',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: '5 m, 12 s',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: '3 m, 47 s',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: 'Sign Document',
            fieldB: '06/26/20 10:35 AM'
          } ]
        },
        {
          name: 'Choco Hong',
          userpic:'Choco.png',
          phone:'(123) 456-7890',
          callstatus: 'call_received',
          date: 'Thu, 14 Feb 9:31 AM',
          duration: '12 sec',
          billstatus: 'alarm_on',
          fee: '$ 1.16',
          rate: '$30',
          expand: [ {
            fieldA: 'Leave him a text about the coffee project...',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: '5 m, 12 s',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: '3 m, 47 s',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: 'Sign Document',
            fieldB: '06/26/20 10:35 AM'
          } ]
        },
        {
          name: 'Jiawei Sun',
          userpic:'Jiawei.png',
          phone:'(123) 456-7890',
          callstatus: 'call_missed_outgoing',
          date: 'Thu, 14 Feb 9:31 AM',
          duration: '0 sec',
          billstatus: 'alarm_off',
          fee: '$ 0',
          rate: '$ 350',
          expand: [ {
            fieldA: 'Leave him a text about the coffee project...',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: '5 m, 12 s',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: '3 m, 47 s',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: 'Sign Document',
            fieldB: '06/26/20 10:35 AM'
          } ]
        },
        {
          name: 'Aaron Honoré',
          userpic:'Aaron.png',
          phone:'(123) 456-7890',
          callstatus: 'call_made',
          date: 'Thu, 14 Feb 9:31 AM',
          duration: '6 sec',
          billstatus: 'alarm_on',
          fee: '$ 0.58',
          rate: '$ 350',
          expand: [ {
            fieldA: 'Leave him a text about the coffee project...',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: '5 m, 12 s',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: '3 m, 47 s',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: 'Sign Document',
            fieldB: '06/26/20 10:35 AM'
          } ]
        },
        {
          name: 'Jonathan Collins',
          userpic:'Jonathan.png',
          phone:'(123) 456-7890',
          callstatus: 'call_missed',
          date: 'Thu, 14 Feb 9:20 AM',
          duration: '0 sec',
          billstatus: 'alarm_off',
          fee: '$ 0',
          rate: '$ 350',
          expand: [ {
            fieldA: 'Leave him a text about the coffee project...',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: '5 m, 12 s',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: '3 m, 47 s',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: 'Sign Document',
            fieldB: '06/26/20 10:35 AM'
          } ]
        },
        {
          name: 'Gregory Anderson',
          userpic:'Gregory.png',
          phone:'(123) 456-7890',
          callstatus: 'call_received',
          date: 'Thu, 14 Feb 9:31 AM',
          duration: '6 sec',
          billstatus: 'alarm_on',
          fee: '$ 0.58',
          rate: '$ 350',
          expand: [ {
            fieldA: 'Leave him a text about the coffee project...',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: '5 m, 12 s',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: '3 m, 47 s',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: 'Sign Document',
            fieldB: '06/26/20 10:35 AM'
          } ]
        },
        {
          name: 'Alcide Honoré',
          userpic:'Alcide.png',
          phone:'(123) 456-7890',
          callstatus: 'call_made',
          date: 'Thu, 14 Feb 8:05 AM',
          duration: '39 m 17 s',
          billstatus: 'alarm_on',
          fee: '$ 127.53',
          rate: '$ 350',
          expand: [ {
            fieldA: 'Leave him a text about the coffee project...',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: '5 m, 12 s',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: '3 m, 47 s',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: 'Sign Document',
            fieldB: '06/26/20 10:35 AM'
          } ]
        },
        {
          name: 'Logan Ellis',
          userpic:'logan.png',
          phone:'(123) 456-7890',
          callstatus: 'call_missed_outgoing',
          date: 'Thu, 14 Feb 9:31 AM',
          duration: '0 sec',
          billstatus: 'alarm_off',
          fee: '$ 0',
          rate: '$ 350',
          expand: [ {
            fieldA: 'Leave him a text about the coffee project...',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: '5 m, 12 s',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: '3 m, 47 s',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: 'Sign Document',
            fieldB: '06/26/20 10:35 AM'
          } ]
        },
        {
          name: 'Armond Honoré',
          userpic:'Armond.png',
          phone:'(123) 456-7890',
          callstatus: 'call_made',
          date: 'Thu, 14 Feb 9:31 AM',
          duration: '6 sec',
          billstatus: 'alarm_on',
          fee: '$ 0.58',
          rate: '$ 350',
          expand: [ {
            fieldA: 'Leave him a text about the coffee project...',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: '5 m, 12 s',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: '3 m, 47 s',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: 'Sign Document',
            fieldB: '06/26/20 10:35 AM'
          } ]
        },
        {
          name: 'Choco Hong',
          userpic:'Choco.png',
          phone:'(123) 456-7890',
          callstatus: 'call_received',
          date: 'Thu, 14 Feb 9:31 AM',
          duration: '12 sec',
          billstatus: 'alarm_on',
          fee: '$ 1.16',
          rate: '$30',
          expand: [ {
            fieldA: 'Leave him a text about the coffee project...',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: '5 m, 12 s',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: '3 m, 47 s',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: 'Sign Document',
            fieldB: '06/26/20 10:35 AM'
          } ]
        },
        {
          name: 'Jiawei Sun',
          userpic:'Jiawei.png',
          phone:'(123) 456-7890',
          callstatus: 'call_missed_outgoing',
          date: 'Thu, 14 Feb 9:31 AM',
          duration: '0 sec',
          billstatus: 'alarm_off',
          fee: '$ 0',
          rate: '$ 350',
          expand: [ {
            fieldA: 'Leave him a text about the coffee project...',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: '5 m, 12 s',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: '3 m, 47 s',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: 'Sign Document',
            fieldB: '06/26/20 10:35 AM'
          } ]
        },
        {
          name: 'Aaron Honoré',
          userpic:'Aaron.png',
          phone:'(123) 456-7890',
          callstatus: 'call_made',
          date: 'Thu, 14 Feb 9:31 AM',
          duration: '6 sec',
          billstatus: 'alarm_on',
          fee: '$ 0.58',
          rate: '$ 350',
          expand: [ {
            fieldA: 'Leave him a text about the coffee project...',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: '5 m, 12 s',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: '3 m, 47 s',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: 'Sign Document',
            fieldB: '06/26/20 10:35 AM'
          } ]
        },
        {
          name: 'Jonathan Collins',
          userpic:'Jonathan.png',
          phone:'(123) 456-7890',
          callstatus: 'call_missed',
          date: 'Thu, 14 Feb 9:20 AM',
          duration: '0 sec',
          billstatus: 'alarm_off',
          fee: '$ 0',
          rate: '$ 350',
          expand: [ {
            fieldA: 'Leave him a text about the coffee project...',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: '5 m, 12 s',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: '3 m, 47 s',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: 'Sign Document',
            fieldB: '06/26/20 10:35 AM'
          } ]
        },
        {
          name: 'Gregory Anderson',
          userpic:'Gregory.png',
          phone:'(123) 456-7890',
          callstatus: 'call_received',
          date: 'Thu, 14 Feb 9:31 AM',
          duration: '6 sec',
          billstatus: 'alarm_on',
          fee: '$ 0.58',
          rate: '$ 350',
          expand: [ {
            fieldA: 'Leave him a text about the coffee project...',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: '5 m, 12 s',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: '3 m, 47 s',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: 'Sign Document',
            fieldB: '06/26/20 10:35 AM'
          } ]
        },
        {
          name: 'Alcide Honoré',
          userpic:'Alcide.png',
          phone:'(123) 456-7890',
          callstatus: 'call_made',
          date: 'Thu, 14 Feb 8:05 AM',
          duration: '39 m 17 s',
          billstatus: 'alarm_on',
          fee: '$ 127.53',
          rate: '$ 350',
          expand: [ {
            fieldA: 'Leave him a text about the coffee project...',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: '5 m, 12 s',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: '3 m, 47 s',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: 'Sign Document',
            fieldB: '06/26/20 10:35 AM'
          } ]
        },
        {
          name: 'Logan Ellis',
          userpic:'logan.png',
          phone:'(123) 456-7890',
          callstatus: 'call_missed_outgoing',
          date: 'Thu, 14 Feb 9:31 AM',
          duration: '0 sec',
          billstatus: 'alarm_off',
          fee: '$ 0',
          rate: '$ 350',
          expand: [ {
            fieldA: 'Leave him a text about the coffee project...',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: '5 m, 12 s',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: '3 m, 47 s',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: 'Sign Document',
            fieldB: '06/26/20 10:35 AM'
          } ]
        },
        {
          name: 'Armond Honoré',
          userpic:'Armond.png',
          phone:'(123) 456-7890',
          callstatus: 'call_made',
          date: 'Thu, 14 Feb 9:31 AM',
          duration: '6 sec',
          billstatus: 'alarm_on',
          fee: '$ 0.58',
          rate: '$ 350',
          expand: [ {
            fieldA: 'Leave him a text about the coffee project...',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: '5 m, 12 s',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: '3 m, 47 s',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: 'Sign Document',
            fieldB: '06/26/20 10:35 AM'
          } ]
        },
        {
          name: 'Choco Hong',
          userpic:'Choco.png',
          phone:'(123) 456-7890',
          callstatus: 'call_received',
          date: 'Thu, 14 Feb 9:31 AM',
          duration: '12 sec',
          billstatus: 'alarm_on',
          fee: '$ 1.16',
          rate: '$30',
          expand: [ {
            fieldA: 'Leave him a text about the coffee project...',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: '5 m, 12 s',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: '3 m, 47 s',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: 'Sign Document',
            fieldB: '06/26/20 10:35 AM'
          } ]
        },
        {
          name: 'Jiawei Sun',
          userpic:'Jiawei.png',
          phone:'(123) 456-7890',
          callstatus: 'call_missed_outgoing',
          date: 'Thu, 14 Feb 9:31 AM',
          duration: '0 sec',
          billstatus: 'alarm_off',
          fee: '$ 0',
          rate: '$ 350',
          expand: [ {
            fieldA: 'Leave him a text about the coffee project...',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: '5 m, 12 s',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: '3 m, 47 s',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: 'Sign Document',
            fieldB: '06/26/20 10:35 AM'
          } ]
        },
        {
          name: 'Aaron Honoré',
          userpic:'Aaron.png',
          phone:'(123) 456-7890',
          callstatus: 'call_made',
          date: 'Thu, 14 Feb 9:31 AM',
          duration: '6 sec',
          billstatus: 'alarm_on',
          fee: '$ 0.58',
          rate: '$ 350',
          expand: [ {
            fieldA: 'Leave him a text about the coffee project...',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: '5 m, 12 s',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: '3 m, 47 s',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: 'Sign Document',
            fieldB: '06/26/20 10:35 AM'
          } ]
        },
        {
          name: 'Jonathan Collins',
          userpic:'Jonathan.png',
          phone:'(123) 456-7890',
          callstatus: 'call_missed',
          date: 'Thu, 14 Feb 9:20 AM',
          duration: '0 sec',
          billstatus: 'alarm_off',
          fee: '$ 0',
          rate: '$ 350',
          expand: [ {
            fieldA: 'Leave him a text about the coffee project...',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: '5 m, 12 s',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: '3 m, 47 s',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: 'Sign Document',
            fieldB: '06/26/20 10:35 AM'
          } ]
        },
        {
          name: 'Gregory Anderson',
          userpic:'Gregory.png',
          phone:'(123) 456-7890',
          callstatus: 'call_received',
          date: 'Thu, 14 Feb 9:31 AM',
          duration: '6 sec',
          billstatus: 'alarm_on',
          fee: '$ 0.58',
          rate: '$ 350',
          expand: [ {
            fieldA: 'Leave him a text about the coffee project...',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: '5 m, 12 s',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: '3 m, 47 s',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: 'Sign Document',
            fieldB: '06/26/20 10:35 AM'
          } ]
        },
        {
          name: 'Alcide Honoré',
          userpic:'Alcide.png',
          phone:'(123) 456-7890',
          callstatus: 'call_made',
          date: 'Thu, 14 Feb 8:05 AM',
          duration: '39 m 17 s',
          billstatus: 'alarm_on',
          fee: '$ 127.53',
          rate: '$ 350',
          expand: [ {
            fieldA: 'Leave him a text about the coffee project...',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: '5 m, 12 s',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: '3 m, 47 s',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: 'Sign Document',
            fieldB: '06/26/20 10:35 AM'
          } ]
        },
        {
          name: 'Logan Ellis',
          userpic:'logan.png',
          phone:'(123) 456-7890',
          callstatus: 'call_missed_outgoing',
          date: 'Thu, 14 Feb 9:31 AM',
          duration: '0 sec',
          billstatus: 'alarm_off',
          fee: '$ 0',
          rate: '$ 350',
          expand: [ {
            fieldA: 'Leave him a text about the coffee project...',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: '5 m, 12 s',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: '3 m, 47 s',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: 'Sign Document',
            fieldB: '06/26/20 10:35 AM'
          } ]
        },
        {
          name: 'Armond Honoré',
          userpic:'Armond.png',
          phone:'(123) 456-7890',
          callstatus: 'call_made',
          date: 'Thu, 14 Feb 9:31 AM',
          duration: '6 sec',
          billstatus: 'alarm_on',
          fee: '$ 0.58',
          rate: '$ 350',
          expand: [ {
            fieldA: 'Leave him a text about the coffee project...',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: '5 m, 12 s',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: '3 m, 47 s',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: 'Sign Document',
            fieldB: '06/26/20 10:35 AM'
          } ]
        },
        {
          name: 'Choco Hong',
          userpic:'Choco.png',
          phone:'(123) 456-7890',
          callstatus: 'call_received',
          date: 'Thu, 14 Feb 9:31 AM',
          duration: '12 sec',
          billstatus: 'alarm_on',
          fee: '$ 1.16',
          rate: '$30',
          expand: [ {
            fieldA: 'Leave him a text about the coffee project...',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: '5 m, 12 s',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: '3 m, 47 s',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: 'Sign Document',
            fieldB: '06/26/20 10:35 AM'
          } ]
        },
        {
          name: 'Jiawei Sun',
          userpic:'Jiawei.png',
          phone:'(123) 456-7890',
          callstatus: 'call_missed_outgoing',
          date: 'Thu, 14 Feb 9:31 AM',
          duration: '0 sec',
          billstatus: 'alarm_off',
          fee: '$ 0',
          rate: '$ 350',
          expand: [ {
            fieldA: 'Leave him a text about the coffee project...',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: '5 m, 12 s',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: '3 m, 47 s',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: 'Sign Document',
            fieldB: '06/26/20 10:35 AM'
          } ]
        },
        {
          name: 'Aaron Honoré',
          userpic:'Aaron.png',
          phone:'(123) 456-7890',
          callstatus: 'call_made',
          date: 'Thu, 14 Feb 9:31 AM',
          duration: '6 sec',
          billstatus: 'alarm_on',
          fee: '$ 0.58',
          rate: '$ 350',
          expand: [ {
            fieldA: 'Leave him a text about the coffee project...',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: '5 m, 12 s',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: '3 m, 47 s',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: 'Sign Document',
            fieldB: '06/26/20 10:35 AM'
          } ]
        },
        {
          name: 'Jonathan Collins',
          userpic:'Jonathan.png',
          phone:'(123) 456-7890',
          callstatus: 'call_missed',
          date: 'Thu, 14 Feb 9:20 AM',
          duration: '0 sec',
          billstatus: 'alarm_off',
          fee: '$ 0',
          rate: '$ 350',
          expand: [ {
            fieldA: 'Leave him a text about the coffee project...',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: '5 m, 12 s',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: '3 m, 47 s',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: 'Sign Document',
            fieldB: '06/26/20 10:35 AM'
          } ]
        },
        {
          name: 'Gregory Anderson',
          userpic:'Gregory.png',
          phone:'(123) 456-7890',
          callstatus: 'call_received',
          date: 'Thu, 14 Feb 9:31 AM',
          duration: '6 sec',
          billstatus: 'alarm_on',
          fee: '$ 0.58',
          rate: '$ 350',
          expand: [ {
            fieldA: 'Leave him a text about the coffee project...',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: '5 m, 12 s',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: '3 m, 47 s',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: 'Sign Document',
            fieldB: '06/26/20 10:35 AM'
          } ]
        },
        {
          name: 'Alcide Honoré',
          userpic:'Alcide.png',
          phone:'(123) 456-7890',
          callstatus: 'call_made',
          date: 'Thu, 14 Feb 8:05 AM',
          duration: '39 m 17 s',
          billstatus: 'alarm_on',
          fee: '$ 127.53',
          rate: '$ 350',
          expand: [ {
            fieldA: 'Leave him a text about the coffee project...',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: '5 m, 12 s',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: '3 m, 47 s',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: 'Sign Document',
            fieldB: '06/26/20 10:35 AM'
          } ]
        },
        {
          name: 'Logan Ellis',
          userpic:'logan.png',
          phone:'(123) 456-7890',
          callstatus: 'call_missed_outgoing',
          date: 'Thu, 14 Feb 9:31 AM',
          duration: '0 sec',
          billstatus: 'alarm_off',
          fee: '$ 0',
          rate: '$ 350',
          expand: [ {
            fieldA: 'Leave him a text about the coffee project...',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: '5 m, 12 s',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: '3 m, 47 s',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: 'Sign Document',
            fieldB: '06/26/20 10:35 AM'
          } ]
        },
        {
          name: 'Armond Honoré',
          userpic:'Armond.png',
          phone:'(123) 456-7890',
          callstatus: 'call_made',
          date: 'Thu, 14 Feb 9:31 AM',
          duration: '6 sec',
          billstatus: 'alarm_on',
          fee: '$ 0.58',
          rate: '$ 350',
          expand: [ {
            fieldA: 'Leave him a text about the coffee project...',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: '5 m, 12 s',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: '3 m, 47 s',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: 'Sign Document',
            fieldB: '06/26/20 10:35 AM'
          } ]
        },
        {
          name: 'Choco Hong',
          userpic:'Choco.png',
          phone:'(123) 456-7890',
          callstatus: 'call_received',
          date: 'Thu, 14 Feb 9:31 AM',
          duration: '12 sec',
          billstatus: 'alarm_on',
          fee: '$ 1.16',
          rate: '$30',
          expand: [ {
            fieldA: 'Leave him a text about the coffee project...',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: '5 m, 12 s',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: '3 m, 47 s',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: 'Sign Document',
            fieldB: '06/26/20 10:35 AM'
          } ]
        },
        {
          name: 'Jiawei Sun',
          userpic:'Jiawei.png',
          phone:'(123) 456-7890',
          callstatus: 'call_missed_outgoing',
          date: 'Thu, 14 Feb 9:31 AM',
          duration: '0 sec',
          billstatus: 'alarm_off',
          fee: '$ 0',
          rate: '$ 350',
          expand: [ {
            fieldA: 'Leave him a text about the coffee project...',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: '5 m, 12 s',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: '3 m, 47 s',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: 'Sign Document',
            fieldB: '06/26/20 10:35 AM'
          } ]
        },
        {
          name: 'Aaron Honoré',
          userpic:'Aaron.png',
          phone:'(123) 456-7890',
          callstatus: 'call_made',
          date: 'Thu, 14 Feb 9:31 AM',
          duration: '6 sec',
          billstatus: 'alarm_on',
          fee: '$ 0.58',
          rate: '$ 350',
          expand: [ {
            fieldA: 'Leave him a text about the coffee project...',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: '5 m, 12 s',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: '3 m, 47 s',
            fieldB: '06/26/20 10:35 AM'
          }, {
            fieldA: 'Sign Document',
            fieldB: '06/26/20 10:35 AM'
          } ]
        }
      ]
    },
    value: now
  };
    
    
  onChange = value => this.setState({ value })
   
  trClassFormat() {
    // row is the current row data
    return "custom-trall-class";  // return class name.
  }
    customtdallClass() {
        return 'custom-tdall-class';
    }
  isExpandableRow() {
    return true;
  }

  expandComponent(row) {
    return (
      <BSTable data={ row.expand } />
    );
  }

  userPic(cell, row) {   // String example
    return `<img src=${ require("../../assets/images/logan.png")} alt="userPic" class="userPic"/><p class="username">${row.name}</p><img src=${ require("../../assets/images/voicepulse.png")} alt="userPic" class="voicepulse"/><span class="userfiledoc"><i class="mdi mdi-file-document"></i></span><p class="userPhone">${row.phone}</p>`;
  }
  userCallStatus(cell, row) {   // String example
    
    {/* <i class="mdi mdi-call-missed"></i>
    <i class="mdi mdi-call-made"></i>
    <i class="mdi mdi-call-received"></i>
    <i class="mdi mdi-alarm-check"></i>
    <i class="mdi mdi-alarm-off"></i> */}
    if (row.callstatus=="call_missed") {
      return `<span class="misscall"><i class="mdi mdi-call-missed"></i></span>`;
    } else if (row.callstatus=="call_received") {
      return `<span class="callreceive"><i class="mdi mdi-call-received"></i></span>`;
    } else if (row.callstatus=="call_made") {
      return `<span class="callmade"><i class="mdi mdi-call-made"></i></span>`;
    } else {
      return `<span class="missoutgoing"><i class="mdi mdi-call-missed"></i></span>`;
    }
  }
  userBillStatus(cell, row) {
    if (row.billstatus=="alarm_on") {
      return `<span class="alarmon"><i class="mdi mdi-alarm-check"></i></span>`;
    } else {
      return `<span class="alarmoff"><i class="mdi mdi-alarm-off"></i></span>`;
    }
  }
  userFee(cell, row) {
    if (row.billstatus=="alarm_on") {
      return `<span class="feeamt">${row.fee}</span>`;
    } else {
      return `<span class="feezero">${row.fee}</span>`;
    }
  }
  userRate(cell, row) {
    return `<span class="rateamt">${row.rate}</span>`;
  }
  render() {
    const options = {
      expandRowBgColor: '#fff',
      defaultSortName: 'name',
    };
    const { datas,value } = this.state;

    return (
      <div>
        <div>
          <form onSubmit={ this.onFormSubmit }>
              <DateRangePicker
                {...ariaLabelProps}
                {...placeholderProps}
                onChange={this.onChange}
                value={value}
              />
              {/* <DatePicker
                calendarAriaLabel="Toggle calendar"
                clearAriaLabel="Clear value"
                dayAriaLabel="Day"
                monthAriaLabel="Month"
                nativeInputAriaLabel="Date"
                onChange={ this.handleChange }
                selected={ this.state.startDate }
                value={this.state.startDate}
                yearAriaLabel="Year"
              /> */}
          </form>
        </div>


        <div>
          <BootstrapTable data={ datas.rows } tableBodyClass='my-custom'
          options={ options }
          search
          pagination
          expandableRow={ this.isExpandableRow }
          expandComponent={ this.expandComponent } trClassName={ this.trClassFormat }>
            <TableHeaderColumn dataField='name' isKey={ true } width="200" dataSort={ true } className={ this.customtdallClass } dataFormat={this.userPic}>Callers</TableHeaderColumn>
            <TableHeaderColumn dataField='' width="120" dataSort={ true } className={ this.customtdallClass } dataFormat={this.userCallStatus}> Call Status</TableHeaderColumn>
            <TableHeaderColumn dataField='date' width="200" dataSort={ true } className={ this.customtdallClass }>Time & Date</TableHeaderColumn>
            <TableHeaderColumn dataField='duration' width="130" dataSort={ true } className={ this.customtdallClass }>Duration</TableHeaderColumn>
            <TableHeaderColumn dataField='' width="120" dataSort={ true } className={ this.customtdallClass } dataFormat={this.userBillStatus}>Bill Status</TableHeaderColumn>
            <TableHeaderColumn dataField='' width="100" dataSort={ true } className={ this.customtdallClass } dataFormat={this.userFee}>Fee</TableHeaderColumn>
            <TableHeaderColumn dataField='' width="100" dataSort={ true } className={ this.customtdallClass } dataFormat={this.userRate}>Rate</TableHeaderColumn>
          </BootstrapTable>

        </div>
      </div>
      
      
    );
  }
}