<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use App\Traits\HttpResponses;
use Illuminate\Http\Exceptions\HttpResponseException;

class UserRequest extends FormRequest
{

    use HttpResponses;

    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name'=>'required',
            'email'=> 'required|email|unique:users,email',
            'password'=>'required',
            'DOB'=>'required',
        ];
    }

    /**
     * Get the error messages for the defined validation rules.
     *
     * @return array<string, string>
     */
    public function messages(): array
    {
        return [
            'name.required' => 'Name is required',
            'email.required' => 'EmailID is required',
            'password.required' => 'Password is required',
            'DOB.required' => 'Date of birth is required'
        ];
    }

    /** If Validation fail throw error
    *
    * @return array<string, string>
    */
    protected function failedValidation(Validator $validator)
    {
        $errors = $validator->errors();

        $data = [
            $errors->messages(),
        ];

        throw new HttpResponseException( $this->validation(false, $data, 'Validation Fails', 422));
    }
}
