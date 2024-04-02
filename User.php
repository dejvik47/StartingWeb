<?php

class User{

    private string $email;
    private string $name;
    private string $password;


    public function update(array $data){
        $this->email = isset($data["email"]) ? $data["email"] : "unknown";
        $this->name = isset($data["name"]) ? $data["name"] : "unknown";
        $this->password = isset($data["password"]) ? $data["password"] : "none";
    }
}

?>