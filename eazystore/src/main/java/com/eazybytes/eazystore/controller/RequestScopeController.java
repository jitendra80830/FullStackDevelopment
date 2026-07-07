package com.eazybytes.eazystore.controller;

import com.eazybytes.eazystore.scope.RequestScopeBean;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("vpi/v1/scope")
public class RequestScopeController {

    private final RequestScopeBean requestScopeBean;

    public RequestScopeController(RequestScopeBean requestScopeBean) {
        this.requestScopeBean = requestScopeBean;
    }

    @GetMapping("/request")
    public ResponseEntity<String> requestTest(){
        requestScopeBean.setName("John Doe");
        return ResponseEntity.ok().body(requestScopeBean.getName());
    }

    @GetMapping("/scope")
    public ResponseEntity<String> requestScopeTest(){
        return ResponseEntity.ok().body(requestScopeBean.getName());
    }
}
