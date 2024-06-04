<?php

namespace App\Traits;

trait HttpResponses{

    /**
     *  Handle Sucess response If Api response is complete
     */
    protected function success($status, $data = array(), $message='', $code=200)
    {
        return response()->json([
            'status' => $status,
            'data' => $data,
            'message' => $message
        ],$code);
    }

    /**
     * Handle error response if api response is fail to complete
     */
    protected function fails($status, $message='', $code=400)
    {
        return response()->json([
            'status' => $status,
            'message' => $message
        ],$code);
    }

    /**
     * Handle validation error if invalid request send
     */
    protected function validation($status, $error = array(), $message='', $code=422)
    {
        return response()->json([
            'status' => $status,
            'message' => $message,
            'errors' => $error
        ],$code);
    }
}