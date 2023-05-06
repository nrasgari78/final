import {SortDirection, SortParam} from "../../../provider/rest/tamin-rest.service";

export interface selectmodel {

  url: string,
  fieldDes: string,
  fieldCode: string,
  searchParam: string,
  sortParam: SortParam,
  multiSelect: boolean,
  data: any


}

export const selectModel: selectmodel = {
  url: 'https://eservices.tamin.ir/api/baseinfo/job',
  fieldDes: 'jobDescription',
  fieldCode: 'jobCode',
  searchParam: '',
  sortParam: {property: 'jobCode', direction: SortDirection.DESC},
  multiSelect: true,
  data:[]
  // data: [
  //   {
  //     jobDescription: "red",
  //     jobCode: "#f00"
  //   },
  //   {
  //     jobDescription: "green",
  //     jobCode: "#0f0"
  //   },
  //   {
  //     jobDescription: "blue",
  //     jobCode: "#00f"
  //   },
  //   {
  //     jobDescription: "cyan",
  //     jobCode: "#0ff"
  //   },
  //   {
  //     jobDescription: "green",
  //     jobCode: "#0f0y"
  //   },
  //   {
  //     jobDescription: "green",
  //     jobCode: "#0f0yhyt"
  //   },
  //   {
  //     jobDescription: "green",
  //     jobCode: "#0fdtdyhuy"
  //   },
  //   {
  //     jobDescription: "green",
  //     jobCode: "#0ff"
  //   },
  //   {
  //     jobDescription: "green",
  //     jobCode: "#0fv"
  //   },
  //   {
  //     jobDescription: "green",
  //     jobCode: "#0fz"
  //   },
  //   {
  //     jobDescription: "green",
  //     jobCode: "#0fa"
  //   },
  //   {
  //     jobDescription: "green",
  //     jobCode: "#0fh"
  //   },
  //   {
  //     jobDescription: "green",
  //     jobCode: "#0fk"
  //   },
  //   {
  //     jobDescription: "green",
  //     jobCode: "#0fp"
  //   },
  //   {
  //     jobDescription: "green",
  //     jobCode: "#0fi"
  //   },
  //   {
  //     jobDescription: "green",
  //     jobCode: "#0f0cv"
  //   },
  //   {
  //     jobDescription: "green",
  //     jobCode: "#0fghj"
  //   },
  //   {
  //     jobDescription: "green",
  //     jobCode: "#0fyuj"
  //   },
  //
  // ]
}

