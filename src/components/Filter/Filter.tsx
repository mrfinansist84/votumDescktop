import React from 'react';
import { FilterProps } from './interface';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import DatePicker from '../DatePicker';
import { SearchTextField } from './SearchTextField';
import { RadioButtonBox } from './RadiobuttonBox';
import { useStyles } from './styles';
import './Filter.scss';
import translater from '../../global/translation.json';

export const initialState = {
  selectedDateStart: Date.now(),
  selectedDateEnd: Date.now(),
  basicFilterName: "",
  advancedFilterName: "",
  searchName: "",
  searchNumber: "",
};

export const Filter: React.FC<FilterProps> = ({ filterAction, settings, userId }) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(initialState);
  const { searchName, searchNumber, selectedDateStart, selectedDateEnd, basicFilterName, advancedFilterName } = value;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const displayedItems: any = {
      title: searchName,
      serialNumber: searchNumber,
      createDate: [selectedDateStart, selectedDateEnd],
    };
    filterAction(basicFilterName, advancedFilterName, displayedItems[advancedFilterName], userId);
  };

  return (
    <Paper
      className={classes.paperWrapper}
      style={{ padding: 10, marginTop: 10 }}>
      <form onSubmit={handleSubmit}>
        <div className="form-container">

          <div className="form-filter-basic">
            <fieldset className="form-legend">
              <legend>{translater.filter.legendStatus}</legend>
              <RadioButtonBox
                filters={settings.basic}
                value={basicFilterName}
                filterHandler={(filter: string) => setValue({ ...value, basicFilterName: filter })}
              />
            </fieldset>

            <div className="form-controls-container">
              <Button
                className={classes.buttonFilter}
                type="submit"
                size="medium"
                variant="outlined">
                {translater.filter.applyFilterBtn}
              </Button>
              <Button
                className={classes.buttonFilter}
                onClick={()=>setValue(initialState)}
                size="medium"
                variant="outlined">
                {translater.filter.clearFilterBtn}
              </Button>
            </div>
          </div>

          <div className="form-filter-advanced">
            <fieldset className="form-legend">
              <legend>{translater.filter.legendAttribute}</legend>
              <RadioButtonBox
                filters={settings.advanced}
                value={advancedFilterName}
                filterHandler={(filter: string) => setValue({ ...value, advancedFilterName: filter })}
              />
              <div className="form-filter-advanced-inner-container">
                {advancedFilterName === 'title'
                  && <SearchTextField
                    placeholder='Введите название документа'
                    innerFilterHandler={(filter: string) => setValue({ ...value, searchName: filter })}
                  />}
                {advancedFilterName === 'serialNumber'
                  && <SearchTextField
                    placeholder='Введите номер документа'
                    innerFilterHandler={(filter: string) => setValue({ ...value, searchNumber: filter })}
                  />}
                {advancedFilterName === 'createDate' && (
                  <div className="form-date-picker-container">
                    <DatePicker
                      selectedDate={selectedDateStart}
                      setSelectedDate={(filter: any) => setValue({ ...value, selectedDateStart: filter })}
                      label="Начальная дата:" />
                    <DatePicker
                      selectedDate={selectedDateEnd}
                      setSelectedDate={(filter: any) => setValue({ ...value, selectedDateEnd: filter })}
                      label="Конечная дата:" />
                  </div>
                )}
              </div>
            </fieldset>
          </div>
        </div>

      </form>
    </Paper>
  )
};