import React from "react";
import { useMutation } from "react-query";
import PrevAnsService from "../services/PrevAnsService";
import { useStateValue } from "../Provider";
import { actions } from "../constant/actions";

function usePrevAns() {
  const usePrevAnsData = () => {
    const [{ prevAns }, dispatch] = useStateValue();
    return useMutation({
      mutationFn: (data) => PrevAnsService.getPrevAns(data),
      onError: (error) => {
        // console.log(error);
      },
      onSuccess: (data) => {
        // console.log(data);
        const res = data?.data?.results
          ?.map((item) => {
            return {
              content: item?.data?.body[0]?.content,
              user: item?.data?.body[0]?.user,
              interaction_dt: item?.interaction_dt,
              status_dt: item?.status_dt,
              updated_dt: item?.updated_dt,
              user_id: item?.user_id,
              created_dt: item?.created_dt,
              interaction_id: item?.interaction_id,
            };
          })
          ?.sort((a, b) => {
            const dateA = new Date(a.created_dt);
            const dateB = new Date(b.created_dt);

            return dateB - dateA;
          });
        dispatch({ type: actions.SET_ANSWER, payload: res });
      },
    });
  };

  return { usePrevAnsData };
}

export default usePrevAns;
