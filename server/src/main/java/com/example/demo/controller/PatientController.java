package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Patient;
import com.example.demo.service.PatientService;
@RestController
@CrossOrigin
public class PatientController {
	@Autowired
	PatientService service;
	
	@PostMapping("/postpatient")
	public String add(@RequestBody Patient patient)
	{
		return service.addPatient(patient);
	}
	
	@GetMapping("/getpatient")
	public List<Patient> get()
	{
		return service.getPatient();
	}
	@GetMapping("/patient/{field}")
	public List<Patient> babyWithSort(@PathVariable String field)
	{
		return service.getPatientSorted(field);
	}
	@PutMapping("/putpatient")
	public String update(@RequestBody Patient patient)
	{
		return service.updatePatient(patient);
	}
	
	@DeleteMapping("/delpatient")
		public String delete(@RequestParam int id)
		{
		return service.deletePatientById(id);
		}
	@GetMapping("/patient/{offset}/{pageSize}")
	public List<Patient> PatientWithPagination(@PathVariable int offset,@PathVariable int pageSize)
	{
		return service.getPatientWithPagination(offset, pageSize );
	}
	@GetMapping("/patient/{offset}/{pageSize}/{field}")
	public List<Patient> patientWithSortingAndPagination(@PathVariable int offset,@PathVariable int pageSize,@PathVariable String field)
	{
		return service.getPatientWithSortingAndPagination(offset, pageSize,field );
	}
	
	

}